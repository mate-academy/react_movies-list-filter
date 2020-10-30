import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: null,
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
                  onChange={(event) => {
                    this.setState({
                      query: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={!this.state.query
            ? moviesFromServer
            : moviesFromServer.filter(
              movie => movie.title.toLowerCase().includes(
                this.state.query.toLowerCase(),
              )
                || movie.description.toLowerCase().includes(
                  this.state.query.toLowerCase(),
                ),
            )
          }
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
