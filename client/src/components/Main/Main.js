import React, { Component } from 'react';

//Components
import PlayersList from "./PlayersList/PlayersList";
import GameCard from "./GameCard/GameCard";

export default class Main extends React.Component {


    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <h1>Title</h1>
                <p>Description</p>

                <h2>Our best players:</h2>
               <PlayersList
                   players={[
                       {name: "Player1", game: "Ruletka", level: 231},
                       {name: "Player1", game: "Ruletka", level: 231},
                       {name: "Player1", game: "Ruletka", level: 231}
                   ]}
               />

                <h2>Most popular game is</h2>

                <GameCard
                    title="Ruletka"
                    description="No description"
                />

            </>
        );
    }
}
