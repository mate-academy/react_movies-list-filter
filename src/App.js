import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  render() {
    const searchText = this.state.query.toLowerCase();
    const searchFilm = ({ title, description }) => (title + description)
      .toLowerCase()
      .includes(searchText);

    const filteredFilms = moviesFromServer.filter(searchFilm);

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
                  onChange={(event) => {
                    this.setState({ query: event.target.value });
                  }}
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filteredFilms} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
