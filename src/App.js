import React, { Component } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import Query from './components/Query/Query';

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
                    const text = event.target.value;

                    this.setState(state => ({ query: text }));
                  }}
                />
              </div>
            </div>
          </div>

          <Query
            movies={moviesFromServer}
            query={query}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
