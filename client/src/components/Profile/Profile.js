import React, {useState, useEffect} from 'react';
import { NavLink, Route } from "react-router-dom";
import Stats from './Stats/Stats'
import Settings from './Settings/Settings'
import Info from './Info/Info'
import { Grid, MenuItem, MenuList, makeStyles, Box } from '@material-ui/core';
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
    profileImage: {
        width: "33%",
        height: "auto",
        minWidth: "200px"
    },
    link: {
        textDecoration: 'none',
        color: "black"
    },
    active: {
        color: "blue"
    },
    profilePicture: {
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        fontSize: "76px",
        backgroundColor: blue[300],
        color: "white"
    },
    mbot: {
        marginBottom: "20px"
    },
});

const Profile = () => {

    useEffect(() => {
        {/*Фетчить данные тут, это componentDidMount*/ }
        const mockUser = {
            firstName: "John",
            lastName: "Doe",
        }
        setUser({
            firstName: mockUser.firstName,
            lastName: mockUser.lastName,
        });
    }, []);

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
    });

    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={0}
        >
            <Grid item xs={12} sm={2}>
                <MenuList>
                    <NavLink to="/profile/stats" className={classes.link} activeClassName={classes.active}><MenuItem align="center">Statistics</MenuItem></NavLink>
                    <NavLink to="/profile/info" className={classes.link} activeClassName={classes.active}><MenuItem>Profile Info</MenuItem></NavLink>
                    <NavLink to="/profile/settings" className={classes.link} activeClassName={classes.active}><MenuItem>Settings</MenuItem></NavLink>
                </MenuList>
            </Grid>
            <Grid item xs={6}>
                <Grid container item xs={12} justify="center" className={classes.mbot}>
                    <Box className={classes.profilePicture}>
                        {user.firstName[0]}{user.lastName[0]} {/*Можно зафетчить нейм и использовать тут инициалы*/}
                    </Box>
                </Grid>
                <Route path="/profile" exact component={Stats} />
                <Route path="/profile/stats" component={Stats} />
                <Route path="/profile/info" component={Info} />
                <Route path="/profile/settings" component={Settings} />
            </Grid>
        </Grid>
    );
}

export default Profile;