import React, { Fragment } from 'react';
import { useQuery } from 'react-query';
import Banner from '../components/Banner';
import { getKit, getKits } from '../api/CookitAPI';
import { Box, Button, Container, Grid, makeStyles, Typography, Divider } from '@material-ui/core';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import Image from '../components/Image';
import TabLibrary from '../components/TabLibrary';
import TabKitItem from '../components/TabKitItem';
import '../components/Tab.scss';

const useStyles = makeStyles({
  root: {
    margin: '32px auto',
    spacing: 8,
  },
  left: {
    textAlign: 'left',
    paddingRight: 16,
  },
  right: {},
  image: {
    height: 400,
  },
  tabContainer: {
    marginTop: 72,
    width: '100%',
  },
  link: {
    textDecoration: 'none',
  },
});

const Kit = ({ id }) => {
  const { status, data, isFetching } = useQuery(`${id}`, getKit, { staleTime: Infinity });
  const { status: kitsStatus, data: kitsData, isFetching: kitsIsFetching } = useQuery(
    'kits',
    getKits,
    { staleTime: Infinity },
  );

  const classes = useStyles();

  if (status === 'loading') {
    return <div>loading...</div>; // loading state
  }
  return (
    <Fragment>
      <Banner restaurant={data.restaurant} />
      <Container>
        <Box className={classes.root}>
          <Grid container>
            {data && (
              <Grid item xs={12} lg={4} xl={4} className={classes.left}>
                <Box>
                  <Typography className={classes.title} variant="h4">
                    {data.name}
                  </Typography>
                  <Typography className={classes.price} gutterBottom={true} variant="h4">
                    £{data.price}
                  </Typography>
                </Box>
                <Box>
                  <Typography className={classes.description} variant="subtitle1">
                    {data.description}
                  </Typography>
                  <Divider style={{ margin: '24px auto', width: 240 }} />
                  <Typography className={classes.subtitle} variant="h6">
                    Ingredients:
                  </Typography>
                  <Typography className={classes.ingredients} paragraph={true} variant="body2">
                    {' '}
                    {data.ingredients}
                  </Typography>
                </Box>
                <Button
                  className={classes.button}
                  size="large"
                  href={data.link_url}
                  variant="contained"
                  color="primary"
                >
                  Visit the Website
                </Button>
              </Grid>
            )}
            <Grid item xs={12} lg={8} xl={8} className={classes.right}>
              <Grid container>
                <Grid item className={classes.image}>
                  {/* <Image
                    src="https://source.unsplash.com/800x450/?food,dish"
                    alt={data.name}
                    imageStyle={{
                      margin: '8px',
                      height: '400px',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  /> */}
                  <Image
                    src={data.service_urls[0]}
                    alt={data.name}
                    imageStyle={{ margin: '8px', height: '400px', objectFit: 'cover' }}
                  />
                </Grid>
              </Grid>
              <Box className={classes.tabContainer}>
                <Tabs>
                  <TabList>
                    <Tab>{`Other Kits from ${data.restaurant.name}`}</Tab>
                    <Tab>Similar Kits</Tab>
                  </TabList>
                  <TabPanel>
                    {kitsStatus === 'loading' ? <div>loading...</div> : ''}
                    {kitsIsFetching === true ? <div>fetching...</div> : ''}
                    {kitsData && <TabLibrary elements={kitsData.slice(0, 2)} item={TabKitItem} />}
                  </TabPanel>
                  <TabPanel>
                    {kitsStatus === 'loading' ? <div>loading...</div> : ''}
                    {kitsIsFetching === true ? <div>fetching...</div> : ''}
                    {kitsData && <TabLibrary elements={kitsData.slice(2, 4)} item={TabKitItem} />}
                  </TabPanel>
                </Tabs>
              </Box>
            </Grid>
          </Grid>
          {isFetching && <p>updating...</p>}
        </Box>
      </Container>
    </Fragment>
  );
};

export default Kit;
