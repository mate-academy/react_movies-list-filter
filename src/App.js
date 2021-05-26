import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    films: moviesFromServer,
  };

  searchMovie = (event) => {
    this.setState({ query: event.target.value });
  }

  getVisiblePeople = (films, query) => {
    const normalizedQuery = query.toLowerCase();

    return films.filter(({ title, description }) => (
      title.toLowerCase().includes(normalizedQuery)
      || description.toLowerCase().includes(normalizedQuery)
    ));
  }

  render() {
    const { query, films } = this.state;
    const visibleFilms = this.getVisiblePeople(films, query);

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
                  onChange={this.searchMovie}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={visibleFilms} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
