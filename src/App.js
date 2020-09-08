import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    visibleMovies: moviesFromServer,
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
      visibleMovies: moviesFromServer.filter(
        movie => movie.title
          .toLowerCase()
          .includes(value.toLowerCase())
          || movie.description
            .toLowerCase()
            .includes(value.toLowerCase()),
      ),
    });
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
                  name="query"
                  value={this.state.query}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
