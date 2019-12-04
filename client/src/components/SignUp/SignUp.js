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

export default class SignUp extends React.Component {

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
                    <Input
                        placeholder="Confirm password"
                        type="password"
                        inputProps={{
                            'aria-label': 'description',
                        }}
                        style={styles.input}
                    />
                    <Button variant="contained" color="primary" style={styles.button}>
                        Create account
                    </Button>

                    <Link to='./signup' style={styles.input}>Create new account</Link>
                </form>
            </>
        );
    }
}
