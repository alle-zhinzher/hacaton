import React, { Component } from 'react'
// Redux
import { Provider } from 'react-redux';
import store from '../store';
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import TestRedux from './TestRedux';
import Main from "./Main/Main";
// Styles
import './App.scss'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/t" component={TestRedux} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;
