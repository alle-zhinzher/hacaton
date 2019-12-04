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
import Header from "./Header/Header";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Header
                    user={{name: 'Player', money: 104}}
                    />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/t" component={TestRedux} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;
