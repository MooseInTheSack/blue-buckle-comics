import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { imagesObjects } from '../../imagePathsObject'

export default function Contact() {
  const classes = {
    root: {
      maxWidth: 345,
    },
    media: {
      maxHeight: 240,
      maxWidth: 240,
    },
  };

  let images = imagesObjects

  for (let image of images) {
    Object.assign(image, {img: image.thumbnail, author: 'test'})
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={images[0].img}
            style={classes.media}
            component="img"
            title="Self Portrait"
            class="center"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              About Me
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              You can see my personal website at <a href="https://ryankirkpatrick.me">ryankirkpatrick.me</a>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href="mailto: rfkirkpatrick@gmail.com" target="_blank">
          Send Email
          </Button>
          <Button size="small" color="primary" href="https://ryankirkpatrick.me" target="_blank">
            Website
          </Button>
          <Button size="small" color="primary" href="https://www.instagram.com/kirkpatrickillustrations/" target="_blank">
            Instagram
          </Button>
        
        </CardActions>
      </Card>
    </div>
  );
}
