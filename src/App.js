import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';

export class App extends Component {
  state = {
    query: '',
  };

  updateValue = (value) => {
    this.setState({ query: value });
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
                <Search query={query} updateValue={this.updateValue} />
              </div>
            </div>
          </div>

          <MoviesList movies={moviesFromServer} query={query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
