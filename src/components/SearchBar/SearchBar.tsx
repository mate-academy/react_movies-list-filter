import React from 'react';

interface Props {
  query: string,
  changeState: (value: string) => void,
}

class SearchBar extends React.Component<Props, {}> {
  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.changeState(event.target.value);
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
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
              value={query}
              onChange={this.onChangeInput}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
