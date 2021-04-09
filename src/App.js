import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  render() {
    const movies = [...moviesFromServer];
    const { query } = this.state;

    const filterFilms = (moviesArr) => {
      const preparedQuery = query.trim().toLowerCase();

      const appropTitles = moviesArr.filter(film => (
        film.title.toLowerCase().includes(preparedQuery)
      ));

      const appropDesc = moviesArr.filter(film => (
        film.description.toLowerCase().includes(preparedQuery)
        && !film.title.toLowerCase().includes(preparedQuery)
      ));

      appropTitles.sort((film1, film2) => (
        film1.description.toLowerCase().indexOf(preparedQuery)
        - film2.description.toLowerCase().indexOf(preparedQuery)
      ));

      appropDesc.sort((film1, film2) => (
        film1.description.toLowerCase().indexOf(preparedQuery)
        - film2.description.toLowerCase().indexOf(preparedQuery)
      ));

      return [
        ...appropTitles,
        ...appropDesc,
      ];
    };

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

          <MoviesList movies={filterFilms(movies)} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
