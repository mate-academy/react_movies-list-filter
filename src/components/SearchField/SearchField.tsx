import React from 'react';

type Props = {
  query: string;
  setQuery: (query: string) => void;
};

export class SearchField extends React.Component<Props> {
  handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.setQuery(event.target.value);
  };

  render() {
    const { query } = this.props;

    return (
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
            value={query}
            onChange={this.handleChanges}
          />
        </div>
      </div>
    );
  }
}
