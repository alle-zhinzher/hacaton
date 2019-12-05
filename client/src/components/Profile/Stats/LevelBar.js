import React from 'react';
import { Typography, makeStyles, Box, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    expContainer: {
        border: "1px solid black",
        borderRadius: "5px",
        height: "25px"
    }
});

const LevelBar = ({ level, exp }) => {

    const classes = useStyles();

    const expBarStyle = {
        width: `${exp / 10}%`,
        backgroundColor: "green",
        height: "100%",
        textAlign: "center",
        color: "white"
    };

    return (
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={12}>
                <Typography align="center" variant="h4">
                    You are level {level}!
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography align="center" variant="h6">
                    Exp to next level: {1000 - exp}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography align="right">
                    0
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Box className={classes.expContainer}>
                    <Box style={expBarStyle}>
                        <Typography>
                            {exp}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={2}>
                <Typography align="left">
                    1000
                </Typography>
            </Grid>
        </Grid>
    );
}

export default LevelBar;