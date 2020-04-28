import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = { searchPhrase: '' };

  inputChangeHandler(searchPhrase) {
    this.setState({ searchPhrase });
  }

  render() {
    const { searchPhrase } = this.state;

    const searchCallback = ({ title, description }) => (title + description)
      .toLowerCase()
      .includes(searchPhrase);

    const filteredMovieList = moviesFromServer.filter(searchCallback);

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
                  onChange={(e) => {
                    const query = e.target.value;

                    this.inputChangeHandler(query);
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={searchPhrase === ''
            ? moviesFromServer
            : filteredMovieList}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
