import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleSearch = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  filterByQuery = (movies) => {
    const lowerCaseQuery = this.state.query.toLowerCase();

    return movies.filter(
      movie => movie.title.toLowerCase().includes(lowerCaseQuery)
        || movie.description.toLowerCase().includes(lowerCaseQuery),
    );
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
                  onChange={this.handleSearch}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.filterByQuery(moviesFromServer)} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
