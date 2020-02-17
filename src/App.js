import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {};

  searchQuery = (event) => {
    const searchMovie = event.target.value;

    this.setState({
      query: searchMovie,
    });
  };

  render() {
    const { query } = this.state;
    let filteredResult = [];

    if (query) {
      const search = query.toLowerCase();
      const callbackSearch = x => x.title.toLowerCase().includes(search)
        || x.description.toLowerCase().includes(search);

      filteredResult = moviesFromServer.filter(callbackSearch);
    }

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
                  onChange={this.searchQuery}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={query ? filteredResult : moviesFromServer} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
