import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;

    this.setState(state => ({
      query: value.toLowerCase(),
    }));
  }

  render() {
    const moviesFiltered = moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(this.state.query)
      || movie.description.toLowerCase().includes(this.state.query)));

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
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={moviesFiltered} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
