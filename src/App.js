import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (inputHandle) => {
    const { value } = inputHandle.target;

    this.setState({
      query: value,
    });
  };

  filteMovies = () => {
    const { query } = this.state;

    return moviesFromServer.filter(
      movie => movie.title.toUpperCase().includes(query.toUpperCase())
      || movie.description.toUpperCase().includes(query.toUpperCase()),
    );
  };

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
                  value={this.state.query}

                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.filteMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
