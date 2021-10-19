import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
  movies: Movie[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
    movies: [...moviesFromServer],
  };

  render() {
    const { query } = this.state;
    const movies = [...this.state.movies].filter(
      movie => movie.title.toLowerCase()
        .includes(query.toLowerCase())
        || movie.description.toLowerCase()
          .includes(query.toLowerCase()),
    );

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
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
              </label>
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
