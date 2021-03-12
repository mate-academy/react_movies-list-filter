import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    moviesList: moviesFromServer,
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      moviesList: moviesFromServer.filter(movie => (
        movie.title.toLowerCase().includes(value.toLowerCase())
        || movie.description.toLowerCase().includes(value.toLowerCase())
      )),
    });
  }

  render() {
    const { moviesList } = this.state;

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
                  name="query"
                  placeholder="Type search word"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={moviesList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
