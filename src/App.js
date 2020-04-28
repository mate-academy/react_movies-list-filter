import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  onChangeInput = (event) => {
    const { target } = event;

    return this.setState({ query: target.value.toLowerCase() });
  }

  filterFilms = () => moviesFromServer.filter((movie) => {
    const lowTitle = movie.title.toLowerCase();
    const lowDescr = movie.description.toLowerCase();

    return (
      lowTitle.includes(this.state.query)
      || lowDescr.includes(this.state.query));
  });

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
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.filterFilms()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
