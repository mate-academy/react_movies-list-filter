import React from 'react';
import './Search.scss';

type State = {
  query: string;
};

type Props = {
  changeQuery: (query: string) => void;
};

export class Search extends React.Component<Props, State> {
  state: State = {
    query: '',
  };

  changeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });

    this.props.changeQuery(event.target.value);
  };

  render() {
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
              value={this.state.query}
              onChange={this.changeQuery}
            />
          </div>
        </div>
      </div>
    );
  }
}
