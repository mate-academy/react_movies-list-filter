import React, { Component } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    query: '',
  };

  changeHandler = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  getVisibleMovies = ({ movies, query }) => {
    let visibleMovies = [...movies];

    if (query) {
      const lowerQuery = query.toLowerCase();

      visibleMovies = visibleMovies
        .filter(movie => (
          movie.title.toLowerCase().includes(lowerQuery)
          || movie.description.toLowerCase().includes(lowerQuery)
        ));
    }

    return visibleMovies;
  }

  render() {
    const { movies, query } = this.state;
    const visibleMovies = this.getVisibleMovies({
      movies, query,
    });

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
                  value={query}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
