import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (value) => {
    this.setState({
      query: value.trimStart(),
    });
  }

  render() {
    const { query } = this.state;

    const preparedMovies = moviesFromServer.filter((item) => {
      const checkValue = query.toLowerCase();

      return item.title.toLowerCase().includes(checkValue)
        || item.description.toLowerCase().includes(checkValue);
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
                <input
                  onChange={e => this.handleChange(e.target.value)}
                  value={query}
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                />
              </div>
            </div>
          </div>
          <MoviesList movies={preparedMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
