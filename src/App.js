import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  render() {
    let copy = [...moviesFromServer];

    if (this.state.query.length > 0) {
      const filterQuery = this.state.query.toLowerCase();

      copy = copy
        .filter(movie => (movie.title.toLowerCase().indexOf(filterQuery) >= 0)
      || (movie.description.toLowerCase().indexOf(filterQuery) >= 0));
    }

    return (
      <div className="page">
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
                  onChange={(event) => {
                    this.setState({ query: event.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={copy} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
