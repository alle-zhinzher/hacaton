import React, { useState, useEffect } from 'react';
import { TextField, Grid, Button, ButtonGroup, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    mtop: {
        marginTop: "20px"
    },
});

const Settings = () => {

    useEffect(() => {
        {/*Фетчить данные тут, это componentDidMount*/ }
        const mockUser = {
            email: "test@email.com",
            password: "testpassword"
        }

        setUser({
            email: mockUser.email,
            password: mockUser.password
        });
    }, []);

    const [passwordPressed, setPasswordPressed] = useState(true);
    const [emailPressed, setEmailPressed] = useState(false);
    const [confirmIsValid, setConfirmIsValid] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const onPasswordPress = () => {
        setPasswordPressed(true);
        setEmailPressed(false);
    }

    const handlePasswordChange = (e) => {
        if (!e.target.value) {
            setConfirmIsValid(false);
        } else {
            setConfirmIsValid(true);
        }
        setUser({ ...user, password: e.target.value });
    }

    const onPasswordConfirm = () => {
        setPasswordPressed(false);
        console.log(user);
    }

    const onEmailPress = () => {
        setPasswordPressed(false);
        setEmailPressed(true);
    }

    const handleEmailChange = (e) => {
        if (!e.target.value) {
            setConfirmIsValid(false);
        } else {
            setConfirmIsValid(true);
        }
        setUser({ ...user, email: e.target.value });
    }

    const onEmailConfirm = () => {
        setEmailPressed(false);
        console.log(user);
    }

    const classes = useStyles();

    return (
        <Grid
            className={classes.mtop}
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
        >
            <Grid item>
                <ButtonGroup>
                    <Button
                        onClick={onPasswordPress}
                        variant="contained"
                        color="secondary">Change Password</Button>
                    <Button
                        onClick={onEmailPress}
                        variant="contained"
                        color="secondary">Change Email</Button>
                </ButtonGroup>
            </Grid>
            {passwordPressed &&
                <>
                    <Grid item>
                        <TextField
                            onChange={(e) => { handlePasswordChange(e) }}
                            type="password"
                            id="newpass"
                            label="New Password" />
                    </Grid>
                    <Link to="/profile/stats">
                        <Button
                            disabled={!confirmIsValid}
                            className={classes.mtop}
                            onClick={onPasswordConfirm}
                            variant="contained"
                            color="primary">Confirm</Button>
                    </Link>
                </>
            }
            {emailPressed &&
                <>
                    <Grid item>
                        <TextField
                            onChange={(e) => { handleEmailChange(e) }}
                            type="email"
                            id="newemail"
                            label="New Email" />
                    </Grid>
                    <Link to="/profile/stats">
                        <Button
                            disabled={!confirmIsValid}
                            className={classes.mtop}
                            onClick={onEmailConfirm}
                            variant="contained"
                            color="primary">Confirm</Button>
                    </Link>
                </>
            }
        </Grid>
    );
}

export default Settings;