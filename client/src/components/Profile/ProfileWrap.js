import React, { Component } from 'react'
import Profile from "./Profile";
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';

class ProfileWrap extends Component {
    componentDidMount() {
        this.props.loadUser();
    }
    render() {
        console.log(this.props)
        return (
            <Profile user={this.props.user} />
        )
    }
}
const mapStateToProps = state => ({
    user: state.authReducer.user
});

export default connect(mapStateToProps, { loadUser})(ProfileWrap);