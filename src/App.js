import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: [...moviesFromServer],
    query: '',
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  moviesFilter = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    if (this.state.query) {
      this.setState(state => ({
        movies: state.movies
          .filter(movie => (
            movie.title.toLowerCase().includes(state.query.toLowerCase())
         || movie.description.toLowerCase().includes(state.query.toLowerCase())
          )),
      }));
    } else {
      this.setState(state => ({ movies: [...moviesFromServer] }));
    }
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
                  onChange={this.handleChange}
                  onKeyDown={this.moviesFilter}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
