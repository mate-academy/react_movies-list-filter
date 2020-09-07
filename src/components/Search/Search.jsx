import React from 'react';
import './Search.scss';

export class Search extends React.Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  }

  render() {
    const { query } = this.state;
    const { moviesFromServer } = this.props;

    const filteredFilms = moviesFromServer
      .filter(item => (
        !query.toLowerCase()
        || (item.title + item.description)
          .toLowerCase().includes(query.toLowerCase())
      ));

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
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>

    );
  }
}
