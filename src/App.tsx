/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  movies: Movie[],
  query: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    movies: moviesFromServer,
    query: '',
  };

  handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  moviesToShow = () => {
    const moviesCopy = [...this.state.movies];
    const query = this.state.query.toLowerCase();

    return moviesCopy.filter(movie => (
      movie.title.toLowerCase().includes(query)
        || movie.description.toLowerCase().includes(query)
    ));
  };

  render() {
    const visibleMovies = this.moviesToShow();

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
                  value={this.state.query}
                  onChange={this.handleQueryChange}
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                />
              </div>
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
