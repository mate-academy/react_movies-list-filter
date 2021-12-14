/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  movies: Movie[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    movies: [...moviesFromServer],
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      movies: moviesFromServer.filter(movie => {
        const lowerTitle = movie.title.toLowerCase();
        const lowerDescription = movie.description.toLowerCase();
        const lowerQuery = value.toLowerCase();

        if (lowerTitle.includes(lowerQuery)
          || lowerDescription.includes(lowerQuery)) {
          return movie;
        }

        return undefined;
      }),
    });
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
                  onChange={this.handleChange}
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
