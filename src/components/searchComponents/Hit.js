import React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';
import { Typography } from '@material-ui/core';

const Hit = ({ hit }) => {
  // console.log('Hit: ', hit);
  const { id, service_urls, restaurant, description, tag_names, name, price } = hit;
  return (
    <div>
      <Typography align="left" gutterBottom color="textSecondary">
        {name}
      </Typography>
      <p>{description}</p>
      {/* <Highlight attribute="name" hit={hit} /> */}
    </div>
  );
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;
