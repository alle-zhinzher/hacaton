import React, { Component } from 'react';

//Components
import PlayersList from "./PlayersList/PlayersList";
import GameCard from "./GameCard/GameCard";

//Styles
import "./Main.scss"
import Typography from "@material-ui/core/Typography";

export default class Main extends React.Component {


    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main className="main">
                <section>
                    <Typography variant="h1" gutterBottom>
                        Title
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Description
                    </Typography>
                </section>

                <section>
                    <h2>Our best players:</h2>
                    <PlayersList
                        players={[
                            {name: "Player1", game: "Ruletka", level: 231},
                            {name: "Player1", game: "Ruletka", level: 231},
                            {name: "Player1", game: "Ruletka", level: 231}
                        ]}
                    />
                </section>

                <section>
                    <h2>Most popular game is</h2>

                    <GameCard
                        title="Ruletka"
                        description="No description"
                        image="https://images.unsplash.com/photo-1567517024911-289435152490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    />
                </section>
            </main>
        );
    }
}
