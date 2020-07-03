import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Price from './Price';

const useStyles = makeStyles({
  root: {
    width: 300,
    spacing: 4,
    minHeight: 400,
  },
  kitName: {
    lineClamp: 2,
    overflow: 'hidden',
    display: '-webkit-box',
    boxOrient: 'vertical',
  },
  media: {
    height: 200,
    marginBottom: 10,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
});

export default function KitItem({ element }) {
  const classes = useStyles();
  const { id, restaurant, service_urls, tag_names, name, price } = element;

  return (
    <Card elevation={3} key={id} className={classes.root}>
      <Link to={`/kit/${id}`} className={classes.link}>
        <CardActionArea>
          <CardMedia className={classes.media} image={service_urls[0]} title={name} />
          {/* <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/800x450/?food,dish"
            title={name}
          /> */}
          {tag_names.map((tag) => (
            <Chip key={tag} label={tag} variant="outlined" margin="1rem" />
          ))}
          <CardContent>
            <Typography className={classes.kitName} gutterBottom variant="h6">
              {name}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" gutterBottom>
              {restaurant.name}
            </Typography>
            <Price price={price} />
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

KitItem.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number.isRequired,
    tag_names: PropTypes.arrayOf(PropTypes.string).isRequired,
    restaurant: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
