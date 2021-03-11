import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    search: '',
  };

  render() {
    const moviesList = moviesFromServer.filter((card) => {
      const title = card.title.toLowerCase();
      const description = card.description.toLowerCase();
      const searching = this.state.search.toLowerCase();

      return title.includes(searching) || description.includes(searching);
    });

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
                  value={this.state.search}
                  onChange={(event) => {
                    this.setState({
                      search: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={moviesList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
