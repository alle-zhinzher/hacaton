import React, { Component } from 'react';

//Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

export default class Main extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
                <List>
                    {
                        this.props.players.map( (current, index) => (
                            <ListItem key={index+current.name}>
                                <ListItemAvatar>
                                    <Avatar>
                                        {current.name[0]}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${index+1}. ${current.name}`}
                                    secondary={`${current.game}, level ${current.level}`}
                                />
                            </ListItem>
                        ))
                    }
                </List>
        );
    }
}
