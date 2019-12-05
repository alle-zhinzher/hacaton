import React, { Component } from 'react'
// Redux
import { Provider } from 'react-redux';
import store from '../store';
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Main from './Main/Main';
import ProfileWrap from './Profile/ProfileWrap';
import ListOfGames from './ListOfGames/ListOfGames';
import SingIn from './SingIn/SingIn';
import SingUp from './SingUp/SingUp';
import GameInfo from './GameInfo/GameInfo';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Prices from "./Prices/Prices";
import RouletteWrap from './Roulette/RouletteWrap';
// Styles
import './App.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Header user={{ name: 'Player', money: 104 }} />
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/profile" component={ProfileWrap} />
                        <Route path="/games" exact component={ListOfGames} />
                        <Route path="/games/:name" component={GameInfo} />
                        <Route path="/login" component={SingIn} />
                        <Route path="/register" component={SingUp} />
                        <Route path="/prices" component={Prices} />
                        <Route path="/game/roulette" component={RouletteWrap} />
                    </Switch>
                    <Footer />
                </Router>
            </Provider>
        );
    };
};

export default App;
