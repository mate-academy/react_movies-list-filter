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

  sortMovies = () => {
    const filter = this.state.movies.filter((movie) => {
      const movieTitleToLowerCase = movie.title.toLowerCase();
      const movieDescriptionToLowerCase = movie.description.toLowerCase();
      const queryToLowerCase = this.state.query.toLowerCase();

      return (
        movieTitleToLowerCase.includes(queryToLowerCase)
        || movieDescriptionToLowerCase.includes(queryToLowerCase)
      );
    });

    return filter;
  };

  render() {
    const sortMovies = this.sortMovies();

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
                  onChange={(event) => {
                    this.setState({
                      query: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={sortMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
