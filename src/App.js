import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: [...moviesFromServer],
  };

  render() {
    const { movies } = this.state;

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
                    this.setState({ query: event.target.value });
                    this.setState((state) => {
                      if (state.query === '') {
                        this.setState({ movies: [...moviesFromServer] });

                        return true;
                      }

                      return ({
                        movies: moviesFromServer.filter(movie => movie.title
                          .toLocaleLowerCase()
                          .includes(state.query.toLowerCase())
                        || movie.description
                          .toLowerCase()
                          .includes(state.query.toLowerCase())),
                      });
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
