import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
  movies: Movie[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
    movies: [...moviesFromServer as Movie[]],
  };

  getVisibleMovies = () => {
    const { query, movies } = this.state;

    let visibleMovies = movies;

    if (query) {
      const queryInLowerCase = query.toLowerCase();

      visibleMovies = movies
        .filter(movie => movie.title.toLowerCase().includes(queryInLowerCase)
          || movie.description.toLowerCase().includes(queryInLowerCase));
    }

    return visibleMovies;
  };

  render() {
    const { query } = this.state;
    const visibleMovies = this.getVisibleMovies();

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
                    this.setState({ query: event.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          {visibleMovies.length !== 0 && (
            <MoviesList movies={visibleMovies} />
          )}
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
