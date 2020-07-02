import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    films: [...moviesFromServer],
  }

  filterFilms = (ev) => {
    ev.persist();
    const search = ev.target.value;

    return (
      this.setState(prevState => ({
        query: search.toLowerCase(),
        films: moviesFromServer.filter(
          movie => (movie.title.toLowerCase().includes(prevState.query.trim())
          || movie.description.toLowerCase().includes(prevState.query.trim())),
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
                  onInput={ev => this.filterFilms(ev)}
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
