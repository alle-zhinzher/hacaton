import React, { Component } from 'react';

//Components
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PlayersList from "./PlayersList/PlayersList";
import GameCard from "./GameCard/GameCard";

//Styles
import "./Main.scss";
import {Link} from "react-router-dom";

export default class Main extends React.Component {


    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main className="main">
                <section className="h1">
                    <Typography variant="h2" gutterBottom>
                        Game Of The Year
                    </Typography>

                </section>

                <section>
                    <img src="../../assets/img/photo-1537154835319-14f43d91ea98.jpg" className="main__banner" />
                </section>

                <section>
                    <Typography variant="body1" component="p" gutterBottom>
                        This site is dedicated to flash games in all their almost endless variety. Old and new
                        small and large-scale, interesting and very interesting - all of them are collected here in
                        rechargeable collection. With the development of the Internet, flash online mini-games began to gain all
                        very popular as a means of entertainment in moments of relaxation, when you can play for free
                        some favorite toy directly in the browser - that’s why they are also known
                        like browser games.
                    </Typography>
                </section>

                <section>
                    <h2>Most popular game is</h2>

                    <GameCard
                        title="Ruletka"
                        description="With the development of the Internet, flash online mini-games began to gain all
                        very popular as a means of entertainment in moments of relaxation"
                        image="../../../../assets/img/photo-1567517024911-289435152490.jpg"
                    />
                </section>

                <section>
                    <img src="../../assets/img/photo-1567517024911-289435152490.jpg" className="main__banner" />
                </section>

                <section>
                    <h2>Join us!</h2>
                    <Link to="./login" className="main__button">
                        <Button variant="contained" color="secondary" size="large">
                            Create an account
                        </Button>
                    </Link>
                </section>

                <section>
                    <iframe src="https://agar.io/">
                        No game here
                    </iframe>
                </section>
            </main>
        );
    }
}
