import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleInputChange = (inputCganged) => {
    this.setState({
      query: inputCganged.target.value,
    });
  };

  filterMovies = (movies, query) => (movies.filter(movie => (
    movie.title.toLowerCase().includes(query.toLowerCase())
    || movie.description.toLowerCase().includes(query.toLowerCase())))
  );

  render() {
    const { query } = this.state;
    const filteredMovies = this.filterMovies(moviesFromServer, query);

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
                  onChange={this.handleInputChange}
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
            Sidebar goes here
        </div>
      </div>
    );
  }
}
