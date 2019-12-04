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
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

// Styles
import './App.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/games" component={ListOfGames} />
                        <Route path="/sing-in" component={SignIn} />
                        <Route path="/sing-up" component={SignUp} />
                    </Switch>
                </Router>
            </Provider>
        );
    };
};

export default App;