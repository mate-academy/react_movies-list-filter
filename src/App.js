import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  queryChangeHandler = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  filterHandler = () => {
    const { query } = this.state;

    if (!query.trim()) {
      return moviesFromServer;
    }

    const filteredMovies = moviesFromServer
      .filter(({ title, description }) => (
        title.toLowerCase().includes(query.toLowerCase())
        || description.toLowerCase().includes(query.toLowerCase())
      ));

    return filteredMovies;
  }

  render() {
    const { query } = this.state;

    const filteredMoviesList = this.filterHandler();

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
                  name="query"
                  placeholder="Type search word"
                  value={query}
                  onChange={this.queryChangeHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filteredMoviesList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
