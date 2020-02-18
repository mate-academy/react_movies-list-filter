import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = (event) => {
    this.setState({
      searchQuery: event.target.value.toLowerCase().trim(),
    });
  };

  render() {
    const { searchQuery } = this.state;

    const filteredList = moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(searchQuery)
      || movie.description.toLowerCase().includes(searchQuery)
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
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filteredList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
