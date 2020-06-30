import React, { Component } from 'react';
import { makeStyles, Container, Typography } from '@material-ui/core';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  Hits,
  connectSearchBox,
  Pagination,
} from 'react-instantsearch-dom';
import Autocomplete from './Autocomplete';
import KitItem from '../KitItem';
import Hit from './Hit';
import KitHit from './KitHit';
import './_search.scss';

const useStyles = makeStyles({
  root: {},
  header: {
    paddingTop: '4em',
    width: '100%',
    display: 'flex',
    backgroundColor: '#dce2e9',
    height: '15vh',
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  hitContainer: {
    marginBottom: 8,
    display: 'block',
  },
});

const VirtualSearchBox = connectSearchBox(() => null);

// const searchClient = algoliasearch('72XDT6UIC9', '785533ff85803b4813e53799b98833c2');
const searchClient = algoliasearch('72XDT6UIC9', '785533ff85803b4813e53799b98833c2');
// const indexName = client.initIndex('your_index_name');

class SearchBar extends Component {
  state = {
    query: '',
  };

  onSuggestionSelected = (_, { suggestion }) => {
    console.log('Suggestion: ', suggestion);
    this.setState({
      query: suggestion.name,
    });
  };

  onSuggestionCleared = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;
    const classes = useStyles();

    return (
      <Container>
        <Typography align="left" gutterBottom color="textSecondary">
          Search for a kit
        </Typography>
        <InstantSearch searchClient={searchClient} indexName="kits">
          <Configure hitsPerPage={5} />
          <Autocomplete
            onSuggestionSelected={this.onSuggestionSelected}
            onSuggestionCleared={this.onSuggestionCleared}
          />

          <VirtualSearchBox
            className="searchBar"
            class="ais-SearchBox-input"
            defaultRefinement={query}
          />
          {/* <SearchBox defaultRefinement={query} /> */}
          <Hits className={classes.hitContainer} hitComponent={KitHit} />
          <Pagination />
        </InstantSearch>
      </Container>
    );
  }
}

export default SearchBar;
