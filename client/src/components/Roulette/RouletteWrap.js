import React, { Component } from 'react'
import Roulette from "./Roulette";
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';

class RouletteWrap extends Component {
    componentDidMount() {
        this.props.loadUser();
    }
    render() {
        console.log(this.props)
        return (

            <Roulette user={this.props.user} />
        )
    }
}
const mapStateToProps = state => ({
    user: state.authReducer.user
});

export default connect(mapStateToProps, { loadUser })(RouletteWrap);