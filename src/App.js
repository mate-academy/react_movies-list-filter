import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  filterByQuery = (query) => {
    const sortedByQuery = query.toLowerCase();

    return moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(sortedByQuery)
      || movie.description.toLowerCase().includes(sortedByQuery)
    ));
  }

  handleEvent = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { query } = this.state;
    const filteredMovies = this.filterByQuery(query);

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
                  value={query}
                  placeholder="Type search word"
                  onChange={this.handleEvent}
                />
              </div>
            </div>
          </div>

          <MoviesList moviesList={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
