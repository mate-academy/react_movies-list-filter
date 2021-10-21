/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  filterMovies = (movies: Array<Movie>, query: string) => {
    return movies.filter(movie => {
      const queryLower = query.toLowerCase();
      const hasInTitle = movie.title.toLowerCase().includes(queryLower);
      const hasInDesc = movie.description.toLowerCase().includes(queryLower);

      return hasInTitle || hasInDesc;
    });
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
                  value={this.state.query}
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList
            movies={this.filterMovies(moviesFromServer, this.state.query)}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
