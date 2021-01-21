import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleInput = (event) => {
    const { value } = event.target;

    this.setState({ query: value });
  }

  render() {
    const { query } = this.state;
    const lowerQuery = query.toLowerCase();
    const filteredMovie = moviesFromServer.filter(movie => (
      movie.description.toLowerCase().includes(lowerQuery)
        || movie.title.toLowerCase().includes(lowerQuery)
    ));

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
                  onChange={this.handleInput}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filteredMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
