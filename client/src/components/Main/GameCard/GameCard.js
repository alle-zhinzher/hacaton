import React from 'react';

//Components
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//Styles
import "./GameCard.scss";

export default class MediaCard extends React.Component{

    render() {
        return (
            <Card className="game-card">
                <CardActionArea>
                    <CardMedia
                        image={this.props.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" color="secondary" variant="contained" style={{margin: '0 auto'}}>
                        Enjoy now
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
