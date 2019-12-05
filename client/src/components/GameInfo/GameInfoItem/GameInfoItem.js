import React from 'react';
import PropTypes from 'prop-types';
import './GameInfoItem.scss';



const GameInfoItem = ({ game }) => (
    <div className='wrapper'>
        <h1 className='main-title'>{game.heading}</h1>
        <div className='main-image' style={{ backgroundImage: `url(${game.mainImage})` }}>mainimg</div>





        <div className='top-description'>
            <p className='top-description__content'>{game.descriptionText}</p>
            <div className='features'>
                <h3 className='features__title'>Main Features</h3>
                <ul className='feature-list'>
                    <li className='feature-list__item'>{game.feature1}</li>
                    <li className='feature-list__item'>{game.feature2}</li>
                    <li className='feature-list__item'>{game.feature3}</li>
                </ul>
            </div>
        </div>

        <div className='gallery'>
            <div className='gallery__item' style={{ backgroundImage: `url(${game.gallery1})` }}>img1</div>
            <div className='gallery__item' style={{ backgroundImage: `url(${game.gallery2})` }}>img2</div>
        </div>

        <div className='details'>
            <h2 className='details__title'>{game.detailsTitle}</h2>
            <p className='details__info'>{game.detailInfo}</p>
            <h3 className='details__caption'>{game.detailCaption}</h3>
            <p className='details__about'>{game.detailAbout}</p>
        </div>


    </div>
);

GameInfoItem.propTypes = {
    game: PropTypes.object.isRequired,
};

export default GameInfoItem;
