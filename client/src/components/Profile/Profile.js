import React from 'react';
import { Route, Link } from "react-router-dom";
import Stats from './Stats/Stats'
import Settings from './Settings/Settings'
import { Grid, MenuItem, MenuList } from '@material-ui/core';

const Profile = () => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={0}
        >
            <Grid item xs={2}>
                <MenuList>
                    <Link to="/profile"><MenuItem>Statistics</MenuItem></Link>
                    <Link to="/profile/settings"><MenuItem>Settings</MenuItem></Link>
                </MenuList>
            </Grid>
            <Grid item xs={6}>
                <Route path="/profile" exact component={Stats} />
                <Route path="/profile/settings" component={Settings} />
            </Grid>
        </Grid>
    );
}

export default Profile;