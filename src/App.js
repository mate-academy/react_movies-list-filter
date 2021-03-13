import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    qwery: '',
    movies: moviesFromServer,
  };

  changeHandler = (event) => {
    this.setState({ qwery: event.target.value });
    this.moviesFilter();
  };

  moviesFilter = () => {
    this.setState((state) => {
      const { qwery } = state;

      return ({
        movies: moviesFromServer.filter((film) => {
          const title = film.title.toLowerCase();
          const description = film.description.toLowerCase();

          return (
            title.includes(qwery.toLowerCase())
            || description.includes(qwery.toLowerCase())
          );
        }),
      });
    });
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
                  defaultValue={this.state.qwery}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
