import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadUser, loadUserStat } from '../../../actions/auth';
import Stats from './Stats';

class StatWrap extends Component {
    componentDidMount() {
        this.props.loadUser();
        this.props.loadUserStat();
    }
    render() {
        return (
            <>
                <Stats user={this.props.user} stat={this.props.stat} />
            </>
        )
    }
};

const mapStateToProps = state => ({
    user: state.authReducer.user,
    stat: state.authReducer.stat,
});

export default connect(mapStateToProps, { loadUser, loadUserStat })(StatWrap);