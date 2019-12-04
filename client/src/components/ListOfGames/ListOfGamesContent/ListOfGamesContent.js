import React from 'react';
import PropTypes from 'prop-types';
import './ListOfGamesContent.scss'

const ListOfGamesContent = () => (

    <div className='games-wrap'>

        <div className='game'>
            <div className='game-container'>
                <a className='game-container__info'>Game info</a>
                <a className='game-container__play'>PLAY NOW</a>
            </div>
            <div className='game-name'>
                <p>Live 3 Card Poker</p>
            </div>
        </div>

        <div className='game'>
            <div className='game-container'>
                <a className='game-container__info'>Game info</a>
                <a className='game-container__play'>PLAY NOW</a>
            </div>
            <div className='game-name'>
                <p>Live 3 Card Poker</p>
            </div>
        </div>

        <div className='game'>
            <div className='game-container'>
                <a className='game-container__info'>Game info</a>
                <a className='game-container__play'>PLAY NOW</a>
            </div>
            <div className='game-name'>
                <p>Live 3 Card Poker</p>
            </div>
        </div>

        <div className='game'>
            <div className='game-container'>
                <a className='game-container__info'>Game info</a>
                <a className='game-container__play'>PLAY NOW</a>
            </div>
            <div className='game-name'>
                <p>Live 3 Card Poker</p>
            </div>
        </div>
        
    </div>
);

// Person.propTypes = {
//     showPersonInfo: PropTypes.func.isRequired,
//     person: PropTypes.object.isRequired,
// };

export default ListOfGamesContent;








