import React, { useState } from 'react';
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
import KitHit from './KitHit';

const useStyles = makeStyles({
  root: {},
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  hitContainer: {
    // display: 'block',
    '.ais-Hits-list': {
      listStyleType: 'none',
      backgroundColor: 'red !important',
    },
  },
});

const VirtualSearchBox = connectSearchBox(() => null);
const searchClient = algoliasearch('72XDT6UIC9', '785533ff85803b4813e53799b98833c2');

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const classes = useStyles();

  return (
    <Container>
      <Typography align="left" gutterBottom color="textSecondary">
        Search for a kit
      </Typography>
      <InstantSearch searchClient={searchClient} indexName="kits">
        <Configure hitsPerPage={5} />
        <Autocomplete
          onSuggestionSelected={(_, { suggestion }) => {
            setQuery(suggestion.name);
          }}
          onSuggestionCleared={() => setQuery('')}
        />

        <VirtualSearchBox
          className="searchBar"
          class="ais-SearchBox-input"
          defaultRefinement={query}
        />
        {/* <SearchBox defaultRefinement={query} /> */}
        <Hits
          className={classes.hitContainer}
          style={{ '.ais-Hits-list': { listStyleType: 'none', backgroundColor: 'red' } }}
          hitComponent={KitHit}
        />
        <Pagination />
      </InstantSearch>
    </Container>
  );
};

export default SearchBar;
