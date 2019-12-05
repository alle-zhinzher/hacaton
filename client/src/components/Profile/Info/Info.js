import React, { useState, useEffect } from 'react';
import { TextField, Grid, Button, ButtonGroup } from '@material-ui/core';

const Info = () => {

    useEffect(() => {
        {/*Фетчить данные тут, это componentDidMount*/ }
        const mockUser = {
            firstName: "John",
            lastName: "Doe",
            nickname: "Destroyer2005"
        }
        setUser({
            firstName: mockUser.firstName,
            lastName: mockUser.lastName,
            nickname: mockUser.nickname,
        });
    }, []);

    const [isEditable, setIsEditable] = useState(false);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        nickname: ""
    });

    const handleFirstNameChange = (e) => {
        setUser({ ...user, firstName: event.target.value });
    }

    const handleLastNameChange = (e) => {
        setUser({ ...user, lastName: event.target.value });
    }

    const handleNicknameChange = (e) => {
        setUser({ ...user, nickname: event.target.value });
    }

    const handleEdit = () => {
        setIsEditable(true);
    };

    const handleSave = () => {
        setIsEditable(false);
        console.log(user);
    }

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
        >
            <Grid item>
                <TextField
                    disabled={!isEditable}
                    onChange={(e) => { handleFirstNameChange(e) }}
                    value={user.firstName}
                    id="firstname"
                    label="Name" />
            </Grid>
            <Grid item>
                <TextField
                    disabled={!isEditable}
                    onChange={(e) => { handleLastNameChange(e) }}
                    value={user.lastName}
                    id="lastname"
                    label="Surname" />
            </Grid>
            <Grid item>
                <TextField
                    disabled={!isEditable}
                    onChange={(e) => { handleNicknameChange(e) }}
                    value={user.nickname}
                    id="nickname"
                    label="Nickname" />
            </Grid>
            <Grid item>
                <ButtonGroup>
                    <Button
                        disabled={isEditable}
                        onClick={handleEdit}
                        variant="contained"
                        color="primary">Edit</Button>
                    <Button
                        disabled={!isEditable}
                        onClick={handleSave}
                        variant="contained"
                        color="primary">Save Changes</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    );
}

export default Info;