import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
  movies: Movie[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
    movies: moviesFromServer,
  };

  filteredMovie = () => {
    return this.state.movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(this.state.query.toLowerCase())
        || movie.description.toLowerCase().includes(this.state.query.toLowerCase())
      );
    });
  };

  render() {
    const filteredMovie = this.filteredMovie();
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
                  value={query}
                  onChange={(event) => {
                    this.setState({
                      query: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filteredMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
