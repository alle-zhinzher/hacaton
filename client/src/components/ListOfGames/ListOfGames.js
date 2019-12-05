import React from 'react';
import ListOfGamesTopDescrtiption from './ListOfGamesTopDescrtiption/ListOfGamesTopDescrtiption';
import ListOfGamesContent from './ListOfGamesContent/ListOfGamesContent';
import ListOfGamesBottomDescrtiption from './ListOfGamesBottomDescrtiption/ListOfGamesBottomDescrtiption';
import './ListOfGames.scss'

class ListOfGames extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gameCard: {
                'imgUrl': '',
                'infoUrl': '',
                'gameUrl': '',
            },
        }
    }

    render() {
        return (
            <React.Fragment>
                <ListOfGamesTopDescrtiption />
                <ListOfGamesContent gameCard={this.state.gameCard} />
                <ListOfGamesBottomDescrtiption />
            </React.Fragment>
        )
    }
};

export default ListOfGames;
