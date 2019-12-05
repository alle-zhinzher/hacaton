import React, { Component } from 'react'
// Redux
import { Provider } from 'react-redux';
import store from '../store';
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Main from './Main/Main';
import Profile from './Profile/Profile';
import ListOfGames from './ListOfGames/ListOfGames';
import SingIn from './SingIn/SingIn';
import SingUp from './SingUp/SingUp';
import GameInfo from './GameInfo/GameInfo';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Prices from "./Prices/Prices";
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
                        <Route path="/profile" component={Profile} />
                        <Route path="/sing-in" component={SingIn} />
                        <Route path="/sing-up" component={SingUp} />
                        <Route path="/games" exact component={ListOfGames} />
                        <Route path="/games/:name" component={GameInfo} />
                        <Route path="/login" component={SingIn} />
                        <Route path="/register" component={SingUp} />
                        <Route path="/prices" component={Prices} />
                    </Switch>
                    <Footer />
                </Router>
            </Provider>
        );
    };
};

export default App;
