import React from 'react';
import GameInfoItem from './GameInfoItem/GameInfoItem'
import './GameInfo.scss'


class GameInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roulette: {
                'heading': 'Live Roulette',
                'mainImage': '../../../assets/img/rouletteMain.png',
                'descriptionText': 'European Roulette is a charming game that is packed full of excitement and big winning potential. You are welcome to place wagers on individual numbers, groups of numbers, colours, odds and evens and much more. The winnings you receive depend on the size of your bet and where the ball lands once the wheel stops spinning.',
                'feature1': '36 numbers + single zero',
                'feature2': 'Available on all devices',
                'feature3': 'House edge – 2.70%',
                'gallery1': '../../../assets/img/rouletteCard.png',
                'gallery2': '../../../assets/img/rouletteCard.png',
                'detailsTitle': 'Magnificent Roulette Variety & Incredible Winning Potential',
                'detailInfo': 'You have officially arrived at the home of live Roulette. Ours is a warm and welcoming live dealer casino where you can feel completely at ease while enjoying the most stylish and immersive live Roulette games under the sun. We are delighted to provide you with an enticing selection of premium-grade live Roulette games, including these fine titles:',
                'detailCaption': 'Immersive Roulette',
                'detailAbout': 'If you think you’ve seen it all before, think again! Immersive Roulette is completely novel; it is everything you’ve ever dreamed of in a live Roulette game, and more. Imagine playing Immersive Roulette with multiple High-Definition camera shots and incredible camera angles of every aspect of the table. You’ll get a bird’s eye-view, oblique views, a dealer’s perspective and much more – all from the comforts of home. Plus, we’ll throw in slow-motion replays of the action so you can see precisely what that magical white ball is doing from the moment the spinning frenzy begins.'
            },
        }
    }

    render() {
        return (
            <GameInfoItem game={this.state[this.props.match.params.name]} />
        )
    }
};

export default GameInfo;
