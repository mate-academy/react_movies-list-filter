import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    query: '',
  };

  queryHandler = (e) => {
    this.setState({
      query: e.target.value,
    });

    this.filterMovies();
  }

  filterMovies = () => {
    this.setState((prevState) => {
      const { query } = prevState;

      return ({
        movies: moviesFromServer.filter((movie) => {
          const description = movie.description.toLowerCase();
          const title = movie.title.toLowerCase();

          return (
            description.includes(query.toLowerCase())
             || title.includes(query.toLowerCase())
          );
        }),
      });
    });
  }

  render() {
    const { movies, query } = this.state;

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
                  onChange={this.queryHandler}
                />
              </div>
            </div>
          </div>
          <MoviesList
            movies={movies}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
