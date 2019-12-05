import React from 'react';
import ListOfGamesContent from './ListOfGamesContent/ListOfGamesContent';
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
                <ListOfGamesContent gameCard={this.state.gameCard} />
            </React.Fragment>
        )
    }
}

export default ListOfGames;
