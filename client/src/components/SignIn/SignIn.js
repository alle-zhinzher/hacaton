import React from "react";

import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';

import {Link} from "react-router-dom";

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

export default class SignIn extends React.Component {

    render() {
        return (
            <>
                <form>
                    <Input
                        placeholder="Email"
                        type="email"
                        inputProps={{
                            'aria-label': 'description',
                        }}
                        style={styles.input}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        inputProps={{
                            'aria-label': 'description',
                        }}
                        style={styles.input}
                    />
                    <Button variant="contained" color="primary" style={styles.button}>
                        Log in
                    </Button>

                    <Link to='./signin' style={styles.input}>Sign in</Link>
                </form>
            </>
        );
    }
}
