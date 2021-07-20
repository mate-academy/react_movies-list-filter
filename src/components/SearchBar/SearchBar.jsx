import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ setQuery, query }) => (
  <div className="field">
    <label htmlFor="search-query" className="label">
      Search movie
    </label>

    <div className="control">
      <input
        type="text"
        id="search-query"
        className="input"
        name="searchbar"
        placeholder="Type search word"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }
        }
      />
    </div>
  </div>
);

SearchBar.propTypes = {
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchBar;
