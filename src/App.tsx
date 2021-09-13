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

  handleChande = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  filterMovies = () => {
    const filteredMovies = this.state.movies.filter((movie) => {
      const movieTitleToLowerCase = movie.title.toLowerCase();
      const movieDescriptionToLowerCase = movie.description.toLowerCase();
      const queryToLowerCase = this.state.query.toLowerCase();

      return (
        movieTitleToLowerCase.includes(queryToLowerCase)
        || movieDescriptionToLowerCase.includes(queryToLowerCase)
      );
    });

    return filteredMovies;
  };

  render() {
    const filterMovies = this.filterMovies();

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
                  onChange={this.handleChande}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filterMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
