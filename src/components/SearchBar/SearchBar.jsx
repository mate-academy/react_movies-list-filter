import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ getValueSerachBar }) => (
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
        onChange={(event) => {
          getValueSerachBar(event.target.value);
        }
        }
      />
    </div>
  </div>
);

SearchBar.propTypes = {
  getValueSerachBar: PropTypes.func.isRequired,
};

export default SearchBar;
