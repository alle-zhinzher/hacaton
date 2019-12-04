
import React, { Component } from 'react'
import './App.scss'

class App extends Component {
    render() {
        const cats = new Array(1000).fill(0).map(() => <img src="assets/img/cat.jpg" />)
        return (
            <div className="hello">
                {cats}
            </div>
        )
    }
}

export default App;