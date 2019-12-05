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
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import GameInfo from './GameInfo/GameInfo';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Prices from "./Prices/Prices";
import Roulette from './Roulette/Roulette';
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
                        <Route path="/sing-in" component={SignIn} />
                        <Route path="/sing-up" component={SignUp} />
                        <Route path="/games" exact component={ListOfGames} />
                        <Route path="/games/:name" component={GameInfo} />
                        <Route path="/login" component={SignIn} />
                        <Route path="/register" component={SignUp} />
                        <Route path="/prices" component={Prices} />
                        <Route path="/game/roulette" component={Roulette} />
                    </Switch>
                    <Footer />
                </Router>
            </Provider>
        );
    };
};

export default App;
