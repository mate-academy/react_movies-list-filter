import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  render() {
    const { query } = this.state;
    const queryToLower = query.toLowerCase();
    const filteredFilms = moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(queryToLower)
      || movie.description.toLowerCase().includes(queryToLower)
    ));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" lassName="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={query}
                  onChange={(event) => {
                    this.setState({
                      query: event.target.value
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={prepearedFilms} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
