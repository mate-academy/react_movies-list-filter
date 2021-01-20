import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  filterMovies = (list) => {
    const processedList = list.filter((movie) => {
      const searchName = this.state.query.toLowerCase();

      return movie.title.toLowerCase().includes(searchName)
        || movie.description.toLowerCase().includes(searchName);
    });

    return processedList;
  }

  render() {
    const { query } = this.state;

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
                  value={query}
                  onChange={this.handleChange}
                  className="input"
                  placeholder="Type search word"
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.filterMovies(moviesFromServer)} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
