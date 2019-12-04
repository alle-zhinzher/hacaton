import React, { Component } from 'react'
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
// Reducer
import { testRedux } from '../actions/test';

class TestRedux extends Component {
    static propTypes = {
        test: PropTypes.string,
        testRedux: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.testRedux()
    }

    render() {
        return (
            <div>
                {this.props.test}
            </div>
        )
    }
}



const mapStateToProps = state => ({
    test: state.testReducer.test,
});

export default connect(mapStateToProps, { testRedux })(TestRedux);
