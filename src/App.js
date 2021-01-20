import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchInput } from './components/SearchInput';

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ query: value.toLowerCase() });
  }

  render() {
    const { query } = this.state;

    const moviesOnPage = moviesFromServer
      .filter((movie) => {
        let { title, description } = movie;

        title = title.toLowerCase();
        description = description.toLowerCase();

        return title.includes(query) || description.includes(query);
      });

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <SearchInput
                  value={query}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={moviesOnPage} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
