import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    inputValue: '',
  };

  render() {
    const { inputValue } = this.state;

    const filmFilterOnChange
      = [...moviesFromServer].filter(({ title, description }) => (
        (title + description).toLowerCase()
          .includes(inputValue.toLowerCase())
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
                  onChange={(event) => {
                    this.setState({ inputValue: event.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filmFilterOnChange} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
