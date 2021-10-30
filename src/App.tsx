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

  getFilteredMovie = () => {
    const { query } = this.state;

    const queryToLowerCase = query.toLowerCase();

    return this.state.movies.filter((movie) => (
      movie.title.toLowerCase().includes(queryToLowerCase)
      || movie.description.toLowerCase().includes(queryToLowerCase)
    ));
  };

  render() {
    const filteredMovie = this.getFilteredMovie();
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
