import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './ListOfGamesContent.scss'

const ListOfGamesContent = ({ gameCard }) => (

    <div className='games-wrap'>

        <div className='game'>
            <div className='game-container'>
                <Link className='game-container__info' to='/games/roulette'> Game info</Link>
                <Link className='game-container__play' to="/">PLAY NOW</Link>
            </div>
            <div className='game-name'>
                <p>Live 3 Card Poker</p>
            </div>
        </div>

        <div className='game'>
            <div className='game-container'>
                <Link className='game-container__info' to='/games/roulette'> Game info</Link>
                <Link className='game-container__play' to="/">PLAY NOW</Link>
            </div>
            <div className='game-name'>
                <p>Live 3 Card Poker</p>
            </div>
        </div>

        <div className='game'>
            <div className='game-container'>
                <Link className='game-container__info' to='/games/roulette'> Game info</Link>
                <Link className='game-container__play' to="/">PLAY NOW</Link>
            </div>
            <div className='game-name'>
                <p>Live 3 Card Poker</p>
            </div>
        </div>

        <div className='game'>
            <div className='game-container'>
                <Link className='game-container__info' to='/games/roulette'> Game info</Link>
                <Link className='game-container__play' to="/">PLAY NOW</Link>
            </div>
            <div className='game-name'>
                <p>Live 3 Card Poker</p>
            </div>
        </div>

    </div>
);

ListOfGamesContent.propTypes = {
    gameCard: PropTypes.object.isRequired,
};

export default ListOfGamesContent;








