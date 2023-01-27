import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    query: '',
  };

  formatMovieDetails = (p: string) => (p.toLocaleLowerCase());

  render() {
    const { query } = this.state;

    const visibleMovies = moviesFromServer
      .filter(movie => {
        const formatedTitle = this.formatMovieDetails(movie.title);
        const formatedDesc = this.formatMovieDetails(movie.description);
        const state = this.formatMovieDetails(query).trim();

        return formatedTitle.includes(state)
          || formatedDesc.includes(state);
      });

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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

          <MoviesList movies={visibleMovies} />
        </div>

        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
