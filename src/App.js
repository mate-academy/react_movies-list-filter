import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleSearch = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  }

  moviesList = () => {
    const { query } = this.state;

    return (moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(query.toLowerCase())
      || movie.description.toLowerCase().includes(query.toLowerCase())
    )));
  }

  render() {
    const moviesList = this.moviesList();

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
                  onChange={this.handleSearch}
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
