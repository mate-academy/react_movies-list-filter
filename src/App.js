import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  changeHandler = (event) => {
    this.setState({ query: event.target.value });
  }

  Search(section) {
    const { query } = this.state;

    return section.toLowerCase().includes(query.toLowerCase());
  }

  render() {
    const { query } = this.state;

    const filterMovies = moviesFromServer.filter(({ title, description }) => (
      this.Search(title) || this.Search(description)
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
                  value={query}
                  onChange={event => this.changeHandler(event)}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filterMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
