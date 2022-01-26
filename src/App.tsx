import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  movies: Movie[];
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    movies: moviesFromServer,
    query: '',
  };

  makeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  findInTitle = (movie: Movie, query: string) => (
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  findInDescription = (movie: Movie, query: string) => (
    movie.description.toLowerCase().includes(query.toLowerCase())
  );

  getVisibleMovies = (movies: Movie[], query: string) => (
    movies.filter(movie => (
      this.findInTitle(movie, query) || this.findInDescription(movie, query)
    ))
  );

  render() {
    const { query, movies } = this.state;

    const visibleMovies = this.getVisibleMovies(movies, query);

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
                    value={query}
                    className="input"
                    placeholder="Type search word"
                    onChange={this.makeQuery}
                  />
                </div>
              </label>
            </div>
          </div>
          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
