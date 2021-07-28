import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleFilterChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const { query } = this.state;
    const filteredMovie = moviesFromServer
      .filter(movie => (
        query
          ? movie.title.toLowerCase().includes(query.toLowerCase())
        || movie.description.toLowerCase().includes(query.toLowerCase())
          : true
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
                  onChange={this.handleFilterChange}
                  value={query}
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
