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

  getMovie = () => {
    const { query } = this.state;

    const foundMovie = moviesFromServer.filter(
      movie => (movie.title.toLowerCase().includes(query.toLowerCase()))
      || (movie.description.toLowerCase().includes(query.toLowerCase())),
    );

    return foundMovie;
  };

  render() {
    const foundMovie = this.getMovie();

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
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    this.setState({
                      query: event.currentTarget.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={foundMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
