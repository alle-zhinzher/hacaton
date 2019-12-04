import React, { Component } from 'react'
import { Provider } from 'react-redux';
import store from '../store';

import TestRedux from './TestRedux';
import './App.scss'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TestRedux />
            </Provider>
        )
    }
}

export default App;