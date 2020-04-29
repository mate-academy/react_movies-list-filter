import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  getCurrentMoviesList = () => {
    const normalizedQuery = this.state.query.toLowerCase();
    const filteredMoviesList = moviesFromServer.filter(
      elem => elem.title.toLowerCase().includes(normalizedQuery),
    );

    return filteredMoviesList;
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
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
                  value={this.state.value}
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.getCurrentMoviesList()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
