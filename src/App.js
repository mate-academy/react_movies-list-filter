import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    search: '',
  };

  render() {
    const filterMoviesList = moviesFromServer
      .filter(movie => (movie.title + movie.description)
        .toLowerCase().includes(this.state.search.toLowerCase()));

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
                  onChange={event => this.setState({
                    search: event.target.value,
                  })}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filterMoviesList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
