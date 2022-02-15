/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  render() {
    const { query } = this.state;

    const visibleMovies = moviesFromServer.filter(movie => {
      return movie.title.toLowerCase().includes(query.toLowerCase())
    || movie.description.toLowerCase().includes(query.toLowerCase());
    });

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor={query} className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id={query}
                  className="input"
                  placeholder="Type search word"
                  value={query}
                  onChange={(event => {
                    this.setState({ query: event.target.value });
                  })}
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
