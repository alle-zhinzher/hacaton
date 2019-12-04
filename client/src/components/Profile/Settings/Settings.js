import React, { useState, useEffect } from 'react';
import { TextField, Grid, Button, ButtonGroup, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    mtop: {
        marginTop: "20px"
    },
});

const Settings = () => {

    useEffect(() => {
        {/*Фетчить данные тут, это componentDidMount*/}
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
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const onPasswordPress = () => {
        setPasswordPressed(true);
        setEmailPressed(false);
    }

    const handlePasswordChange = (e) => {
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
                    <Button onClick={onPasswordPress} variant="contained" color="secondary">Change Password</Button>
                    <Button onClick={onEmailPress} variant="contained" color="secondary">Change Email</Button>
                </ButtonGroup>
            </Grid>
            {passwordPressed &&
                <>
                    <Grid item>
                        <TextField type="password" id="oldpass" label="Old Password" />
                    </Grid>
                    <Grid item>
                        <TextField onChange={(e) => { handlePasswordChange(e) }} type="password" id="newpass" label="New Password" />
                    </Grid>
                    <Button className={classes.mtop} onClick={onPasswordConfirm} variant="contained" color="primary">Confirm</Button>
                </>
            }
            {emailPressed &&
                <>
                    <Grid item>
                        <TextField onChange={(e) => { handleEmailChange(e) }} type="email" id="newemail" label="New Email" />
                    </Grid>
                    <Button className={classes.mtop} onClick={onEmailConfirm} variant="contained" color="primary">Confirm</Button>
                </>
            }
        </Grid>
    );
}

export default Settings;