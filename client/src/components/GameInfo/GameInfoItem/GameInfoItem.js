import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

import './GameInfoItem.scss';



const GameInfoItem = ({ game }) => (
    <div className='wrapper'>
        <Typography variant="h2" gutterBottom>{game.heading}</Typography>
        <div className='main-image' style={{ backgroundImage: `url(${game.mainImage})` }}>mainimg</div>

        <section className='top-description'>
            <p className='top-description__content'>{game.descriptionText}</p>
            <div className='features'>
                <h3 className='features__title'>Main Features</h3>
                <ul className='feature-list'>
                    <li className='feature-list__item'>{game.feature1}</li>
                    <li className='feature-list__item'>{game.feature2}</li>
                    <li className='feature-list__item'>{game.feature3}</li>
                </ul>
            </div>
        </section>

        <div className='gallery'>
            <img className='gallery__item' src={game.gallery1} />
            <img className='gallery__item' src={game.gallery2} />
        </div>

        <section className='details'>
            <h2 className='details__title'>{game.detailsTitle}</h2>
            <p className='details__info'>{game.detailInfo}</p>
        </section>
        <section>
            <h3 className='details__caption'>{game.detailCaption}</h3>
            <p className='details__about'>{game.detailAbout}</p>
        </section>
        <section className='linkWrap'>
            <Link to='/game/roulette' className='play__link' ><Button variant="contained" color="secondary">Play</Button></Link>
        </section>

    </div>
);

GameInfoItem.propTypes = {
    game: PropTypes.object.isRequired,
};

export default GameInfoItem;
