import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const useStyles = makeStyles({
  socialContainer: {
    padding: 0,
    marginTop: "2rem",
  },

});

function Social({ restaurant }) {
  const classes = useStyles();
  const { id, name, tags, city, description, twitter, instagram, facebook, email } = restaurant;
  console.log('Restaurant: ', restaurant);

  return (
    <Container className={classes.socialContainer} display="flex">
    {facebook && <a href={facebook} className="social" target="_blank" rel="noopener">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>}
    {instagram && <a href={instagram} className="social" target="_blank" rel="noopener">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>}
    {twitter && <a href={twitter} className="social" target="_blank" rel="noopener">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>}
    {email && <a href={"mailto:" + email} className="social" target="_blank" rel="noopener">
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
    </a>}
    </Container>
  );
}

export default Social;