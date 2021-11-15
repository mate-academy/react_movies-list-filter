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

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => (
    this.setState({ query: event.target.value }));

  render() {
    const { query } = this.state;

    const visibleMovies = moviesFromServer.filter(
      movie => (
        movie.title.toLowerCase().includes(query.toLocaleLowerCase())
        || movie.description.toLowerCase().includes(query.toLocaleLowerCase())
      ),
    );

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
                  name="query"
                  type="text"
                  value={query}
                  onChange={this.handleChange}
                  id="search-query"
                  className="input"
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
