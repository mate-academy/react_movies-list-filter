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
    this.setState({
      query: (event.target.value).toLowerCase(),
      movies: [...moviesFromServer],
    });
    this.moviesFilter();
  };

  moviesFilter = () => {
    const { query } = this.state;

    if (query) {
      this.setState(state => ({
        movies: state.movies
          .filter(movie => (
            movie.title.toLowerCase().includes(query)
         || movie.description.toLowerCase().includes(query)
          )),
      }));
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
