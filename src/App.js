import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  addToQuery = (input) => {
    this.setState({
      query: input.toLowerCase(),
    });
  }

  render() {
    const { query } = this.state;

    const movies = moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(query)
      || movie.description.toLowerCase().includes(query)
    ));

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
                  onChange={((event) => {
                    this.addToQuery(event.target.value.trim());
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
