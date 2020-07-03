import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    films: [...moviesFromServer],
  }

  filterFilms = (value) => {
    const search = value.trim().toLowerCase();

    return (
      this.setState(() => ({
        films: moviesFromServer.filter(
          movie => (movie.title.toLowerCase().includes(search)
          || movie.description.toLowerCase().includes(search)),
        ),
      })));
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
                  onInput={ev => this.filterFilms(ev.target.value)}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.films} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
