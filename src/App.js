import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  changeInput = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  }

  render() {
    const { query } = this.state;
    let filteredMovies = [];

    if (query) {
      const searched = query.toLowerCase();

      const filtered = x => x.title.toLowerCase().includes(searched)
        || x.description.toLowerCase().includes(searched);

      filteredMovies = moviesFromServer.filter(filtered);
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
                  onChange={this.changeInput}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={query ? filteredMovies : moviesFromServer} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
