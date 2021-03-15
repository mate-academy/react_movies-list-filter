import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    visibleMovies: moviesFromServer,
  };

  changeHandler = (event) => {
    this.setState({ query: event.target.value });
    this.filterMovies();
  }

  filterMovies = () => {
    this.setState((prevState) => {
      const { query } = prevState;

      const regex = new RegExp(query.toLowerCase(), 'g');
      const filteredMovies = moviesFromServer.filter(movie => (
        regex.test(movie.description.toLowerCase())
          || regex.test(movie.title.toLowerCase())
      ));

      return {
        visibleMovies: filteredMovies,
      };
    });
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
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={this.state.query}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
