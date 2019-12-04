import React from "react";

//Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from "./SideBar/SideBar";


const styles = {
    appBar: {
        display: 'flex'
    },
    menuButton: {
        marginRight: '2rem'
    },
    title: {
        flexGrow: '1'
    }
};

export default class Header extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            sideBarOpened: false
        }
    }

    toggleSideBar = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({sideBarOpened: open});
    };

    render() {
        return (
            <>
                <AppBar position="static" style={styles.appBar}>
                    <Toolbar>
                        <IconButton edge="start" style={styles.menuButton} color="inherit" aria-label="menu" onClick={this.toggleSideBar(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={styles.title}>
                            GameOfTheYear
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <SideBar
                    opened={this.state.sideBarOpened}
                    toggle={this.toggleSideBar}
                />
            </>
        );
    }
}
