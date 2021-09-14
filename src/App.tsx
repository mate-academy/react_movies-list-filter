import React from 'react';
import { Movie } from './type/Movie';
import './App.scss';
import { searchMovie } from './components/serchMovie/serchMovie';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
  movieStorage: Movie[],
};

export class App extends React.Component<{}, State> {
  moviesFromServerClone = moviesFromServer.map(movie => {
    return {
      ...movie,
    };
  });

  state: State = {
    query: '',
    movieStorage: this.moviesFromServerClone,
  };

  render() {
    const { movieStorage, query } = this.state;

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
                  onChange={(event) => this.setState({ query: event.target.value })}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={searchMovie(movieStorage, query)} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
