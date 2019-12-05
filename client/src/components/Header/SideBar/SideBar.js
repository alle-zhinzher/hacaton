import React from 'react';

//Components
import {Link} from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from "@material-ui/core/Button";

//Styles
import './SideBar.scss';

export default class SideBar extends React.Component{

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Drawer open={this.props.opened} onClose={this.props.toggle(false)}>
                    <div
                        role="presentation"
                        //onClick={this.props.toggle(false)}
                        //onKeyDown={this.props.toggle(false)}
                    >
                        <List className='list'>
                            {
                                [['Home', '/'], ['All games', '/games'], ['Item3','/'], ['Item4','/']].map((item, index) => (
                                    <>
                                        <Link to={item[1]} key={item[0]} className="side-bar__link">
                                            <ListItem button>
                                                <ListItemText primary={item[0]} />
                                            </ListItem>
                                        </Link>
                                        <Divider />
                                    </>
                                ))
                            }
                        </List>
                        {
                            this.props.user? (
                                <Link to='/profile' key='Profile'>
                                    <ListItem button>
                                        <ListItemText primary='Profile' />
                                    </ListItem>
                                </Link>
                            ) : (
<<<<<<< HEAD
=======

>>>>>>> 1023ca645d55675a6666d12148fbd9400e94d8d5
                                <Link to='/login' component="button" className="button-container side-bar__link">
                                    <Button variant="contained" color="primary" className="login-button">
                                        Log in
                                    </Button>
                                </Link>
                            )
                        }

                    </div>
                </Drawer>
            </div>
        );
    }
}
