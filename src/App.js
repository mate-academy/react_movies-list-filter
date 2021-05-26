import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleQueryChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const { query } = this.state;
    const normalizedQuery = query.toLowerCase();
    const visibleFilm = moviesFromServer.filter(film => (
      film.title.toLocaleLowerCase().includes(normalizedQuery)
      || film.description.toLocaleLowerCase().includes(normalizedQuery)));

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
                  value={this.state.query}
                  onChange={this.handleQueryChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={visibleFilm} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
