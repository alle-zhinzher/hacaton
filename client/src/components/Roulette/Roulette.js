import React from 'react'
import { useState, useEffect } from 'react'
import CONSTANT from './constants'
import io from 'socket.io-client'
import './Roulette.scss'

export default function Roulette() {

    /*---------- STATES ----------*/
    const [gameState, setGameState] = useState(false);

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

    const [moneyState, setMoneyState] = useState(100);

    /*---------- FUNCTIONS ----------*/
    let socket;
    useEffect(() => {
        socket = io();
        socket.on("makeBet", (msg) => { console.log(msg) });
        socket.on("endGame", (msg) => {
            console.log(msg);
            calculateRotateDegree(msg.result);
            setTableState(initialTableState);
        });
        socket.on("startGame", () => { setGameState(true) });
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
            socket.emit("makeBet", { user: "Я_Какая_то_Заглушка", bet: newTableState[value], betType: value });
        }
    }

    /*---------- RENDER ----------*/
    return (
        <>
            {
                gameState
                    ? (
                        <section className="roulette-container"
                            style={{ background: `url('${CONSTANT.IMAGE_PATH}roulette-bg.png')` }}>
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
                        </section>
                    )
                    : (
                        <button onClick={() => { socket.emit("startGame") }}>Start game</button>
                    )
            }
            {/* <button onClick={() => {
                calculateRotateDegree(parseInt(Math.random() * CONSTANT.ROULETTE_NUMBERS.length));
            }}>Rotate</button> */}
        </>
    )
}