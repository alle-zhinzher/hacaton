// import React from 'react';


// const ListOfGamesContent = ({ gameCard }) => (

//     <div className='games-wrap'>

//         <div className='game'>
//             <div className='game-container'>
//                 <Link className='game-container__info' to='/games/roulette'> Game info</Link>
//                 <Link className='game-container__play' to="/">PLAY NOW</Link>
//             </div>
//             <div className='game-name'>
//                 <p>Live 3 Card Poker</p>
//             </div>
//         </div>

//         <div className='game'>
//             <div className='game-container'>
//                 <Link className='game-container__info' to='/games/roulette'> Game info</Link>
//                 <Link className='game-container__play' to="/">PLAY NOW</Link>
//             </div>
//             <div className='game-name'>
//                 <p>Live 3 Card Poker</p>
//             </div>
//         </div>

//         <div className='game'>
//             <div className='game-container'>
//                 <Link className='game-container__info' to='/games/roulette'> Game info</Link>
//                 <Link className='game-container__play' to="/">PLAY NOW</Link>
//             </div>
//             <div className='game-name'>
//                 <p>Live 3 Card Poker</p>
//             </div>
//         </div>

//         <div className='game'>
//             <div className='game-container'>
//                 <Link className='game-container__info' to='/games/roulette'> Game info</Link>
//                 <Link className='game-container__play' to="/">PLAY NOW</Link>
//             </div>
//             <div className='game-name'>
//                 <p>Live 3 Card Poker</p>
//             </div>
//         </div>

//     </div>

// );

// ListOfGamesContent.propTypes = {
//     gameCard: PropTypes.object.isRequired,
// };

// export default ListOfGamesContent;



import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './ListOfGamesContent.scss'



const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const cards = [
    {
        image: "rouletteCard.png",
        name: "Roulette",
        description: "European Roulette is a charming game that is packed full of excitement and big winning potential.",
        info: "/games/roulette",
        link: "/game/roulette"
    },
    {
        image: "tictactoe.png",
        name: "Tic Tac Toe",
        description: "European Roulette is a charming game that is packed full of excitement and big winning potential.",
        info: "/games/tictactoe",
        link: "http://localhost:1000",
        external: true
    }
];

export default function ListOfGamesContent() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.heroContent}>
                <Container maxWidth="lg">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Casino games
            </Typography>
                    <Typography variant="h5" color="textSecondary" paragraph>
                        Casino games at 777 bring you unrivalled excitement, surprises winning opportunities with every spin of the reels, every roll of the dice and every deal of cards. Experience the fabulous iconic glam, glitz and style of retro Vegas straight to your computer or mobile at 777 Casino.
            </Typography>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map(card => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={"../../../assets/img/"+card.image}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">{card.name}</Typography>
                                    <Typography>{card.description}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <Link className='game-container__info' to={card.info}> Game info</Link>
                                    </Button>
                                    <Button size="small" color="primary">
                                        {card.external? <a className='game-container__play' href={card.link}>PLAY NOW</a> :
                                            <Link className='game-container__play' to={card.link}>PLAY NOW</Link>}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <div className={classes.heroContent}>
                <Container maxWidth="lg">
                    <Typography  paragraph>
                        Are you passionate about Casino table games? Take your pick of a plethora of the very best classic and classy single-player and multi-player online roulette, blackjack & baccarat games.
        A slots aficionado? We present an un-matched selection of in-house, latest release and branded online video slots & classic slots games were you can win anything from free spins, cash bonuses and huge progressive jackpots in an instant!
        Live Casino your ‘thing’, looking for the ‘real’ deal? Stroll on over to our Live Casino Roulette, Live Blackjack and Live Baccarat games and place a bet on your favourite game. Play, chat and win in real-time with professional, friendly dealers at our state-of-the-art live casino tables.
        Play 777 online casino games on-the-go! Most of our casino games are mobile friendly so you can place bets & play your favourite casino games to win any place, anytime on your mobile device.
        So, step inside 777 and open the door to a world of exciting, surprising & rewarding casino games. Play 777 casino games now and go for the jackpot!
    Play Now!
            </Typography>
                </Container>
            </div>


        </React.Fragment>
    );
}





