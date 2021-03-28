import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    filteredMovies: moviesFromServer,
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });

    this.filterMovies();
  };

  filterMovies = () => {
    const { query } = this.state;

    this.setState({
      filteredMovies: moviesFromServer.filter(
        (movie) => {
          const title = movie.title.toLocaleLowerCase();
          const description = movie.description.toLocaleLowerCase();

          return title.includes(query.toLowerCase())
            || description.includes(query.toLowerCase());
        },
      ),
    });
  }

  render() {
    const { query, filteredMovies } = this.state;

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
                  value={query}
                  onChange={this.handleChange}
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
