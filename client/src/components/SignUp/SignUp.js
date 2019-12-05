import React from "react";

import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

const styles = {
    form: {
        width: '320px',
        margin: '0 auto'
    },
    input: {
        width: '50%',
        marginBottom: '1rem'
    },
    button: {
        width: '100%',
        marginBottom: '1rem',
        marginTop: '1rem'
    }
};

export default class SignUp extends React.Component {
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
        console.log(this.state.username, this.state.password);
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
                    <Button type="submit" variant="contained" color="primary" style={styles.button}>
                        Create account
                    </Button>

                    <Link to='./signup' style={styles.input}>Create new account</Link>
                </form>
            </>
        );
    }
}
