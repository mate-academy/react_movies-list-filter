import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  search: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    search: '',
  };

  render() {
    const movies = moviesFromServer.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.search)
        || movie.description.toLowerCase().includes(this.state.search);
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
                  className="input"
                  id="search-query"
                  placeholder="Type search word"
                  type="text"
                  onChange={(event) => {
                    this.setState({ search: event.target.value.toLowerCase() });
                  }}
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
