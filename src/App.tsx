/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  filteredMovies = () => {
    return moviesFromServer.filter(movie => {
      const queryInLower = this.state.query.toLowerCase();
      const titleInLower = movie.title.toLowerCase();
      const decriptionInLower = movie.description.toLowerCase();

      return (
        titleInLower.includes(queryInLower) || decriptionInLower.includes(queryInLower)
      );
    });
  };

  changeQuery = (value:string) => {
    this.setState({ query: value });
  };

  render() {
    const visibleMovies = this.filteredMovies();

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
                  onChange={(event) => {
                    this.changeQuery(event.target.value);
                  }}
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
