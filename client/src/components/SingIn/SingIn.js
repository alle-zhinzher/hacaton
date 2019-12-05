import React from "react";

import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';
import "./SingIn.scss";
//Redux
import { connect } from "react-redux";
import { login } from "../../actions/auth";

import { Link, Redirect } from "react-router-dom";

const styles = {
    form: {
        maxWidth: '320px',
        margin: '0 auto'
    },
    input: {
        width: '100%',
        marginBottom: '1rem'
    },
    button: {
        width: '100%',
        marginBottom: '1rem',
        marginTop: '1rem'
    }
};

class SingIn extends React.Component {
    state = {
        email: '',
        password: '',
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/profile" />;
        }
        return (

            <form onSubmit={this.onSubmit}>
                <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    inputProps={{
                        'aria-label': 'description',
                    }}
                    style={styles.input}
                    onChange={this.onChange}

                />
                <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    inputProps={{
                        'aria-label': 'description',
                    }}
                    style={styles.input}
                    onChange={this.onChange}
                />
                <Button type="submit" variant="contained" color="primary" style={styles.button}>
                    Log in
                    </Button>

                <Link to='/sing-up' className='sing-up__link' style={styles.input}>Sing up</Link>
            </form>

        );
    } SingIn
}


const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { login })(SingIn);
SingIn