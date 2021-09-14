import React, { ChangeEvent } from 'react';

type Props = {
  handleChangeEvent: (event:ChangeEvent<HTMLInputElement>) => void;
  query:string;
};

export class SearchBar extends React.PureComponent<Props> {
  render() {
    const { handleChangeEvent, query } = this.props;

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
              onChange={event => handleChangeEvent(event)}
              value={query}
            />
          </div>
        </div>
      </div>
    );
  }
}
