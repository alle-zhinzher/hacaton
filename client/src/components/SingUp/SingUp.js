import React from "react";
// Material
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';
import './SingUp.scss';
// Redux
import { connect } from "react-redux";
import { register } from "../../actions/auth";
//Router
import { Link } from "react-router-dom";

const styles = {
    form: {
        margin: '0 auto'
    },
    input: {
        width: '100%',
        marginBottom: '1rem',
    },
    button: {
        width: '100%',
        marginBottom: '1rem',
        marginTop: '1rem'
    }
};

class SingUp extends React.Component {
    state = {
        username: '',
        password: '',
        password2: '',
        email: '',
        firstName: '',
        lastName: ''
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.register(
            this.state.username,
            this.state.email,
            this.state.password,
            this.state.firstName,
            this.state.lastName,
        )
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <Input
                        placeholder="username"
                        type="text"
                        name="username"
                        inputProps={{
                            'aria-label': 'description',
                        }}
                        style={styles.input}
                        onChange={this.onChange}
                    /><br />
                    <Input
                        placeholder="Email"
                        type="email"
                        name="email"
                        inputProps={{
                            'aria-label': 'description',
                        }}
                        style={styles.input}
                        onChange={this.onChange}
                    /><br />

                    <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        inputProps={{
                            'aria-label': 'description',
                        }}
                        style={styles.input}
                        onChange={this.onChange}
                    /><br />
                    <Input
                        placeholder="Confirm password"
                        type="password"
                        name="password2"
                        inputProps={{
                            'aria-label': 'description',
                        }}
                        style={styles.input}
                        onChange={this.onChange}
                    /><br />
                    <Input
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        inputProps={{
                            'aria-label': 'firstName',
                        }}
                        style={styles.input}
                        onChange={this.onChange}
                    /><br />
                    <Input
                        placeholder="Last Name"
                        type="text"
                        name="lastName"
                        inputProps={{
                            'aria-lnnabel': 'lastName',
                        }}
                        style={styles.input}
                        onChange={this.onChange}
                    /><br />
                    <Button className='create-button' type="submit" variant="contained" color="primary" style={styles.button}>
                        Create account
                    </Button>

                    <Link to='/sing-in' className='sing-in__link' style={styles.input}>Sing-in</Link>
                </form>
            </>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    errorMsg: state.authReducer.errorMsg,
});
export default connect(mapStateToProps, { register })(SingUp);