import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  queryOnChangeHandler = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { queryOnChangeHandler, state: { query } } = this;

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
                  onChange={queryOnChangeHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={query.length === 0 ? moviesFromServer : (
            moviesFromServer.filter((movie) => {
              const title = movie.title.toUpperCase();
              const description = movie.description.toUpperCase();
              const transCasedQuery = query.toUpperCase();

              return title.includes(transCasedQuery)
                || description.includes(transCasedQuery);
            })
          )}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
