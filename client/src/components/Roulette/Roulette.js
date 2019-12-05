import React from 'react'
import { useState, useEffect } from 'react'
import CONSTANT from './constants'
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');
import './Roulette.scss'

export default function Roulette(props) {

    /*---------- STATES ----------*/
    const [gameState, setGameState] = useState(false);

    const [playersState, setPlayersState] = useState({});//{ chel: { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 1, 28: 1, 29: 1, 30: 1, 31: 1, 32: 1, 34: 1, 35: 1, 36: 1 } })

    const [rouletteState, setRouletteState] = useState(0);

    const [rotationState, setRotationState] = useState(0);

    const initialTableState = {}
    const tableValuesArray = [...CONSTANT.ROULETTE_NUMBERS
        .map(e => e.value)
        .filter((_, i) => i > 0)
        .sort((a, b) => a - b),
        "red", 0, "black"];
    tableValuesArray.forEach(e => {
        initialTableState[e] = 0
    });
    const [tableState, setTableState] = useState(initialTableState);

    const [chipState, setChipState] = useState(25);

    const [moneyState, setMoneyState] = useState(parseInt(sessionStorage.money));

    /*---------- FUNCTIONS ----------*/
    useEffect(() => {
        socket.on("makeBet", (msg) => {
            console.log(msg);
            setPlayersState(msg);
        });
        socket.on("endGame", (msg) => {
            console.log(msg);
            calculateRotateDegree(msg.result);
            setTableState(initialTableState);
            setGameState(false);
        });
        socket.on("startGame", () => {
            setGameState(true);
        });
    }, [])

    function getIndex(number) {
        for (let i = 0; i < CONSTANT.ROULETTE_NUMBERS.length; i++) {
            if (CONSTANT.ROULETTE_NUMBERS[i].value === number) return i;
        }
    }

    function calculateRotateDegree(newNumber) { // call when gets new value
        const oldIndex = getIndex(rouletteState);
        const newIndex = getIndex(newNumber);
        const difIndex = newIndex >= oldIndex
            ? newIndex - oldIndex
            : (newIndex + CONSTANT.ROULETTE_NUMBERS.length) - oldIndex;
        setRotationState(rotationState + CONSTANT.DEFAULT_ROTATE_VALUE + difIndex * CONSTANT.ONE_SECTION_DEGREES,
            setRouletteState(newNumber))
    }

    function makeRate(value, money) {
        if (moneyState - money >= 0) {
            const newTableState = { ...tableState }
            setMoneyState(money ? moneyState - money : moneyState + newTableState[value]);
            newTableState[value] = money ? newTableState[value] + money : 0;
            setTableState(newTableState);
            socket.emit("makeBet", { user: localStorage.getItem("token"), bet: newTableState[value], betType: value });
        }
    }

    /*---------- RENDER ----------*/
    return (
        <>
            <section className="roulette-container"
                style={{ background: `url('${CONSTANT.IMAGE_PATH}roulette-bg.png')` }}>
                {
                    gameState
                        ? null
                        : (
                            <button className="START"
                                onClick={() => { socket.emit("startGame") }}>Start game</button>
                        )
                }
                <img alt="Roulette"
                    className="roulette-container__roulette"
                    src={`${CONSTANT.IMAGE_PATH}roulette.png`}
                    style={{
                        transform: `rotate(${rotationState}deg)`
                    }} />
                <p className="roulette-container__arrow"></p>
                <div className="roulette-container__table table">
                    {
                        tableValuesArray.map(cell => (
                            <div key={cell}
                                className={`table__cell
                                                ${typeof cell === "string" ? "table__cell-big" : ""}`}
                                onClick={() => makeRate(cell, chipState)}>
                                <span className="table__cell-value">{cell}</span>
                                <span className="table__cell-money">{tableState[cell] || null}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="roulette-container__chip-table chip-table">
                    <span className="chip-table__money">
                        {`You have ${moneyState}$`}
                    </span>
                    {
                        CONSTANT.CHIPS_ARRAY.map(e => (
                            <div key={e.value}
                                className={`chip-table__chip
                                                    chip-table__chip-${e.color}
                                                    ${e.value === chipState
                                        ? "chip-table__chip-active"
                                        : ""}`}
                                onClick={() => setChipState(e.value)}>
                                {e.value}
                            </div>
                        ))
                    }
                </div>
                <section className="players-container"
                    style={{ background: `url('${CONSTANT.IMAGE_PATH}roulette-bg.png')` }}>
                    {
                        Object.keys(playersState).map((player, num) => (
                            <div key={num} className="players-container__player">
                                <span className="players-container__player-name">Player{num}</span>
                                <table className="players-container__player-data">
                                    {
                                        Object.keys(playersState[player]).map((info, num) => (
                                            playersState[player][info]
                                                ? (
                                                    <tr key={num} className="players-container__row">
                                                        <td className="players-container__col players-container__col-name">{info}:</td>
                                                        <td className="players-container__col players-container__col-value">{playersState[player][info]}</td>
                                                    </tr>
                                                )
                                                : null
                                        ))
                                    }
                                </table>
                            </div>
                        ))
                    }
                </section>
            </section>

            {/* <button onClick={() => {
                calculateRotateDegree(parseInt(Math.random() * CONSTANT.ROULETTE_NUMBERS.length));
            }}>Rotate</button> */}
        </>
    )
}