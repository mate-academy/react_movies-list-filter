import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    filtredBy: '',
  };

  handleFilterChange = ({ target }) => this.setState(
    { filtredBy: target.value },
  );

  filtredFilms = () => moviesFromServer.filter(
    film => film.title.toLowerCase()
      .includes(this.state.filtredBy.toLowerCase())
      || film.description.toLowerCase()
        .includes(this.state.filtredBy.toLowerCase()),
  );

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
                  value={this.state.filtredBy}
                  onChange={this.handleFilterChange}
                />
              </div>
            </div>
          </div>
          <MoviesList movies={this.filtredFilms()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
