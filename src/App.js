import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchWord: '' };
  }

  handleChange = (event) => {
    this.setState({ searchWord: event.target.value });
  };

  render() {
    const sortedListOfMovies = moviesFromServer
      .filter(el => ((el.title + el.description)
        .toLocaleLowerCase()
        .includes((this.state.searchWord)
          .toLocaleLowerCase())));

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
                  name="searchWord"
                  value={this.state.searchWord}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <MoviesList
            movies={sortedListOfMovies}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
