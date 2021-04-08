import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    query: '',
  };

  render() {
    let { movies } = this.state;
    const { query } = this.state;

    const appropTitles = movies.filter(film => (
      film.title.toLowerCase().includes(query.toLowerCase())
    ));

    const appropDesc = movies.filter(film => (
      film.description.toLowerCase().includes(query.toLowerCase())
      && !film.title.toLowerCase().includes(query.toLowerCase())
    ));

    appropTitles.sort((film1, film2) => (
      film1.description.toLowerCase().indexOf(query.toLowerCase())
      - film2.description.toLowerCase().indexOf(query.toLowerCase())
    ));

    appropDesc.sort((film1, film2) => (
      film1.description.toLowerCase().indexOf(query.toLowerCase())
      - film2.description.toLowerCase().indexOf(query.toLowerCase())
    ));

    movies = [
      ...appropTitles,
      ...appropDesc,
    ];

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
                  onChange={event => this.setState({
                    query: event.target.value,
                  })}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
