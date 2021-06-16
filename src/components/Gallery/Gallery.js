import React from 'react';
import ModalImage from "react-modal-image";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import {imagesObjects} from '../../imagePathsObject'

function Gallery() {

  const classes = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));

  let images = imagesObjects

  for (let image of images) {
    Object.assign(image, {img: image.thumbnail, author: 'test'})
  }
    
  return (
    <div className="Gallery">
        <h2>Gallery</h2>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 3}>
            <ModalImage
              small={tile.img}
              large={tile.img}
              alt={tile.title}
            />
          </GridListTile>
        ))}
      </GridList>
      
    </div>
  );
}

export default Gallery;