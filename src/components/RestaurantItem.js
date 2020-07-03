import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: 300,
    maxWidth: 560,
    spacing: 4,
    minHeight: '100%',
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

export default function RestaurantItem({ element }) {
  const classes = useStyles();

  const deliveryOptions = element.delivery_options;
  const kitCount = element.kit_count;
  const { id, name, service_urls, tag_names } = element;

  return (
    <Card elevation={3} key={id} className={classes.root}>
      <Link to={`/restaurant/${id}`} className={classes.link}>
        <CardActionArea>
          <CardMedia className={classes.media} image={service_urls[0]} title={name} alt={name} />
          {/* <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/800x450/?restaurant"
            title={name}
            alt={name}
          /> */}
          {tag_names.map((tag) => (
            <Chip key={tag} label={tag} variant="outlined" m={1} />
          ))}
          <CardContent>
            <Typography gutterBottom variant="h5">
              {name}
            </Typography>
            <Typography color="textSecondary" variant="body1" gutterBottom>
              {deliveryOptions}
            </Typography>
            <Typography color="textSecondary" variant="body1" gutterBottom>
              {kitCount > 1 ? `${kitCount} kits ` : `${kitCount} kit `}
              available
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

RestaurantItem.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    service_urls: PropTypes.arrayOf(PropTypes.string),
    delivery_options: PropTypes.string.isRequired,
    tag_names: PropTypes.arrayOf(PropTypes.string).isRequired,
    kit_count: PropTypes.number.isRequired,
  }).isRequired,
};
