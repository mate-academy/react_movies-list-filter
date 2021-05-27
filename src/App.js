import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends React.Component {
  state = {
    query: '',
  };

  handleQuery = (event) => {
    this.setState({ query: event.target.value });
  }

  render() {
    const selectedMovies = moviesFromServer
      .filter(movie => ((`${movie.title} ${movie.description}`).toLowerCase()
        .includes(this.state.query.toLowerCase())));

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
                  onChange={this.handleQuery}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={selectedMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
