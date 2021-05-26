import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  queryChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { query } = this.state;

    const normalizeQuery = query.toLocaleLowerCase();
    const filtredMovies = moviesFromServer.filter(
      movie => movie.title.toLocaleLowerCase().includes(normalizeQuery)
              || movie.description.toLocaleLowerCase().includes(normalizeQuery),
    );

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
                  onChange={this.queryChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filtredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
