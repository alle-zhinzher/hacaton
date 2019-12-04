import React from 'react';
import { Grid, Typography, makeStyles, Card, Box } from '@material-ui/core';
import {  yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
    title: {
        fontWeight: "bold",
        marginTop: "10px"
    },
    number: {
        color: yellow['A700'],
        fontWeight: "bold",
        fontSize: "1.5rem",
        position: "relative",
        zIndex: "3"
    },
    circle: {
        backgroundColor: "black",
        borderRadius: "50%",
        padding: "5px",
        width: "auto",
        minWidth: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: "2"
    },
    card: {
        backgroundColor: yellow['A400'],
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "125px",
        padding: "10px 30px",
        position: "relative",
        marginTop: "20px"
    },
    stripe: {
        width: "500px",
        height: "25px",
        backgroundColor: "black",
        position: "absolute",
        bottom: "25px",
        zIndex: 1,
        color: "white",
        cursor: "default"
    },
});

const StatsItem = (props) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
                <div className={classes.stripe}>
                </div>
                <Typography className={classes.title} align="center" color="textPrimary">
                    {props.name}
                </Typography>
                <Box className={classes.circle}>
                    <Typography className={classes.number} align="center">
                        {props.number}
                    </Typography>
                </Box>
            </Card>
        </Grid>
    );
}

export default StatsItem 