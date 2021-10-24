import React from 'react';
import './Search.scss';

interface Props {
  query: string,
  callback: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export class Search extends React.PureComponent<Props, {}> {
  render() {
    const { query, callback } = this.props;

    return (
      <>
        <label htmlFor="search-query" className="label">
          <div>Search movie</div>
          <div className="control">
            <input
              type="text"
              value={query}
              id="search-query"
              className="input"
              placeholder="Type search word"
              onChange={callback}
            />
          </div>
        </label>
      </>
    );
  }
}
