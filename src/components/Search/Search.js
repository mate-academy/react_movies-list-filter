import React, { Component } from 'react';
import './Search.scss';
import { MoviesList } from '../MoviesList';
import moviesFromServer from '../../api/movies.json';

export class Search extends Component {
  state = {
    query: '',
  };

  render() {
    const preparedMovies = moviesFromServer.filter(({ title, description }) => (
      (title + description)
        .toUpperCase()
        .includes(this.state.query.toUpperCase())
    ));

    return (
      <div className="page-content">
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
                onChange={event => this.setState({ query: event.target.value })}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={preparedMovies} />
      </div>
    );
  }
}
