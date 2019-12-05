import React, { Component } from 'react';

//Components
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

//Styles
import "./Footer.scss";


export default class Footer extends React.Component {
    render() {
        return (

            <AppBar position="static" className="footer">
                <Typography variant="body1" display="block" align="center" gutterBottom>
                    GameOfTheYear (since 12/04/2019)
                </Typography>
            </AppBar>


        );
    }
}
