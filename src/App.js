import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    text: '',
  };

  handleInputChange = (event) => {
    this.setState({ text: event.target.value });
  }

  render() {
    const preparedMovies = moviesFromServer.filter(movie => (
      movie.title.toLowerCase()
        .includes(this.state.text.toLowerCase())
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
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={preparedMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
