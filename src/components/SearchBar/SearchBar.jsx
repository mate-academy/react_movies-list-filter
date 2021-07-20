import React from 'react';

const SerachBar = appObject => (
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
          appObject.classApp.setAppState(event.target.value);
        }
        }
      />
    </div>
  </div>
);

export default SerachBar;
