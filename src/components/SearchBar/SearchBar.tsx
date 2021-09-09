import React from 'react';

interface Props {
  query: string;
  addQuery: (value: string) => void;
}

export class SearchBar extends React.Component<Props, {}> {
  filterByQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.addQuery(event.target.value);
  };

  render() {
    const { query } = this.props;

    return (
      <div className="box">
        <div className="field">
          <label htmlFor="search-query" className="label">
            Search movie
          </label>

          <div className="control">
            <input
              value={query}
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
              onChange={this.filterByQuery}
            />
          </div>
        </div>
      </div>
    );
  }
}
