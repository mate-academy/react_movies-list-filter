import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  render() {
    const searchInput = this.state.query.toLowerCase();
    const filteredList = moviesFromServer.filter(({ title, description }) => (
      (title + description).toLowerCase().includes(searchInput)
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
                  onChange={(e) => {
                    this.setState({
                      query: e.target.value,
                    });
                  }}
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
