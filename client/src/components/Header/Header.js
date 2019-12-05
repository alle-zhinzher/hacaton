import React from "react";

//Redux
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';

import { Link } from "react-router-dom";
//Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

import SideBar from "./SideBar/SideBar";

//Styles
import './Header.scss';

const styles = {
    appBar: {
        display: 'flex'
    },
    avatar: {
        textDecoration: 'none'
    },
    menuButton: {
        marginRight: '2rem'
    },
    title: {
        flexGrow: '1'
    }
};

class Header extends React.Component {

    componentDidMount() {
        this.props.loadUser();
    }
    state = {
        sideBarOpened: false
    }

    componentDidUpdate() {
        sessionStorage.money = `${this.props.user ? this.props.user.money : 100}`;
    }

    toggleSideBar = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({ sideBarOpened: open });
    };

    render() {
        return (
            <>
                <AppBar position="static" className="app-bar">
                    <Toolbar>
                        <IconButton edge="start" className="app-bar__menu-button" color="inherit" aria-label="menu" onClick={this.toggleSideBar(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className="app-bar__title" >
                            GameOfTheYear
                        </Typography>
                        {
                            this.props.user ? (
                                <>
                                    <Typography variant="h6" className="app-bar__menu-button" >
                                        {this.props.user.money ? this.props.user.money : null}$
                                    </Typography>
                                    <Link to='/prices' className="app-bar__avatar" >
                                        <Button className="app-bar__menu-button" variant="contained" color="secondary">
                                            Add money
                                    </Button>
                                    </Link>
                                    <Link to='/profile' className="app-bar__avatar" ><Avatar>{this.props.user.username[0].toUpperCase()}</Avatar></Link>
                                </>) : (<Button color="inherit">Login</Button>)
                        }
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

const mapStateToProps = state => ({
    user: state.authReducer.user
});

export default connect(mapStateToProps, { loadUser })(Header);
