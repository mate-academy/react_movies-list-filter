import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  filmQueryChange= (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;
    const normalizedQuery = query.toLowerCase();
    const visibleFilm = moviesFromServer.filter(film => film.title.toLowerCase().includes(normalizedQuery));

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
                  onChange={this.filmQueryChange}
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
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

export default App;
