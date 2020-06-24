import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { getKits } from '../api/CookitAPI';
import KitItem from '../components/KitItem';

class KitLibrary extends Component {
  constructor() {
    super();
    this.state = {
      kits: [],
    };
  }

  componentDidMount() {
    getKits().then((kits) => {
      this.setState({ kits });
    });
  }

  render() {
    const { kits } = this.state;
    return (
      <div>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justify="space-around"
        >
          {kits.map((kit) => (
            <Grid item key={kit.id} xs={12} sm={6} md={4} lg={3} xl={3} zeroMinWidth>
              <KitItem key={kit.id} kit={kit} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default KitLibrary;