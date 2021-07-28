import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handlerChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const changeMovies = this.handlerChange;
    const { query } = this.state;
    const searchMovies = moviesFromServer.filter(
      movie => (
        movie.title.toLowerCase().includes(this.state.query.toLowerCase())
        || movie.description.toLowerCase().includes(
          this.state.query.toLowerCase(),
        )
      ),
    );

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
                  onChange={changeMovies}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={searchMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
