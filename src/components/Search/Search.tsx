import React from 'react';

type Props = {
  query: string,
  handlerQuery: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

export class Search extends React.PureComponent<Props> {
  render() {
    const { query, handlerQuery } = this.props;

    return (
      <div className="field">
        <label htmlFor="search-query" className="label">
          <div>Search movie</div>
          <div className="control">
            <input
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
              value={query}
              onChange={handlerQuery}
            />
          </div>
        </label>
      </div>
    );
  }
}
