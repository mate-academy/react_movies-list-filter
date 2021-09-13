import React from 'react';

type Props = {
  query: string;
  setQuery: (value: string) => void
};

export class Search extends React.Component<Props> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value;

    this.props.setQuery(target);
  };

  render() {
    const { handleChange } = this;
    const { query } = this.props;

    return (
      <div className="box">
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
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
