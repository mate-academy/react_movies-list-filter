import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  getValue = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  }

  filterMovies = () => {
    const lowerQuery = this.state.query.toLowerCase();

    return [...moviesFromServer].filter(movie => (
      movie.title.toLowerCase().includes(lowerQuery)
      || movie.description.toLowerCase().includes(lowerQuery)));
  };

  render() {
    const { query } = this.state;

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
                  onChange={this.getValue}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.filterMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
