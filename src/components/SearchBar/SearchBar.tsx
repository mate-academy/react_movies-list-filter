import React from 'react';

type Props = {

};

export class SearchBar extends React.PureComponent<Props> {
  render() {
    return (
      <div className="SearchBar">
        <div className="field">
          <label htmlFor="search-query" className="label">
            Search movie
          </label>

          <div className="control">
            <input
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
            />
          </div>
        </div>
      </div>
    );
  }
}
