import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  changedInput = (event) => {
    this.setState({
      query: event.target.value.toLowerCase(),
    });
  }

  render() {
    const searcher = this.state.query;
    const searchedMovies = moviesFromServer.filter(
      movie => movie.title.toLowerCase().includes(searcher)
      || movie.description.toLowerCase().includes(searcher),
    );

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
                  onChange={this.changedInput}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={searchedMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
