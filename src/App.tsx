import React from 'react';
import './App.scss';
import { Movie } from './components/types/Movie';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  movies: Movie[]
  query: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    movies: [...moviesFromServer],
    query: '',
  };

  visibleMovies = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState(() => ({
      query: value,
      movies: moviesFromServer.filter(film => (
        film.title.toLowerCase().includes(value.toLowerCase())
        || film.description.toLowerCase().includes(value.toLowerCase()))),
    }));
  };

  render() {
    const { movies, query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control  */}
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
                  onChange={(e) => this.visibleMovies(e)}
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
