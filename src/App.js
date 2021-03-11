import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    filteredMovies: [...moviesFromServer],
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
    this.filter();
  }

  filter = () => {
    this.setState((state) => {
      const { query } = state;

      return ({
        filteredMovies: moviesFromServer.filter((film) => {
          const title = film.title.toLowerCase();
          const description = film.description.toLowerCase();

          return (
            title.includes(query.toLowerCase())
              || description.includes(query.toLowerCase())
          );
        }),
      });
    });
  }

  render() {
    const { filteredMovies } = this.state;

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
                  defaultValue={this.state.query}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
