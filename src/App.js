import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    filteredFilmList: moviesFromServer,
  };

  findingFilms = (event) => {
    const { query } = this.state;

    this.setState({
      query: event.target.value,
      filteredFilmList: [...moviesFromServer].filter((film) => {
        if (film.title.toLowerCase().includes(query)
        || film.description.toLowerCase().includes(query)) {
          return true;
        }

        return false;
      }),
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
                  onChange={this.findingFilms}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.filteredFilmList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
