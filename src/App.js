import React, { Component } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import SearchQuery from './components/SearchQuery/SearchQuery';

export class App extends Component {
  state = {
    query: '',
  };

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
                  className="input"
                  placeholder="Type search word"
                  onChange={(event) => {
                    const searchPhrase = event.target.value;

                    this.setState(() => ({
                      query: searchPhrase,
                    }));
                  }}
                />
              </div>
            </div>
          </div>
          <SearchQuery movies={moviesFromServer} query={query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
