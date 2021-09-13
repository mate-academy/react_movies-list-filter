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
    movies: [...moviesFromServer],
  };

  getPassingMovies = () => {
    const lowerQuery = this.state.query.toLowerCase();

    const passingMovies = this.state.movies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(lowerQuery)
        || movie.description.toLowerCase().includes(lowerQuery)
      );
    });

    return passingMovies;
  };

  inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  render() {
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
                  onChange={this.inputHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.getPassingMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
