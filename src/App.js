import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: [...moviesFromServer],
    query: '',
  };

  handleFind = (event) => {
    const { value } = event.target;

    this.setState(state => ({

      query: value,
      movies: moviesFromServer.filter(
        obj => obj.title.toLowerCase().includes(state.query.toLowerCase())
        || obj.description.toLowerCase().includes(state.query.toLowerCase()),
      ),
    }));
  };

  render() {
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
                  value={this.state.query}
                  onChange={this.handleFind}
                />
              </div>
            </div>
          </div>

          <MoviesList
            movies={this.state.query ? this.state.movies : moviesFromServer}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
