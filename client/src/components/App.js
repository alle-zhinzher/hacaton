import React, { Component } from 'react'
// Redux
import { Provider } from 'react-redux';
import store from '../store';
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import TestRedux from './TestRedux';
import Home from './Home';
// Styles
import './App.scss'
import ListOfGames from './ListOfGames/ListOfGames';
import GameInfo from './GameInfo/GameInfo'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/t" component={TestRedux} />
                        <Route path="/games" exact component={ListOfGames} />
                        <Route path="/games/:name" component={GameInfo} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;