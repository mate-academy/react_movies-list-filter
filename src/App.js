import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: [...moviesFromServer],
    query: '',
  };

  search = (event) => {
    const { value } = event.target;

    this.setState(state => ({
      query: value,
      movies: state.movies.map((movie) => {
        if (movie.title.toLowerCase().includes(value.toLowerCase())
        || movie.description.toLowerCase().includes(value.toLowerCase())) {
          return ({
            ...movie,
            hidden: false,
          });
        }

        return ({
          ...movie,
          hidden: true,
        });
      }),
    }));
  }

  render() {
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
                  value={this.state.query}
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={this.search}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
