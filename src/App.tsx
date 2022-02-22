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

  changeQuery() {
    return (
      (event: React.ChangeEvent<HTMLInputElement>) => (
        this.setState({ query: event.target.value }))
    );
  }

  render() {
    const { query } = this.state;
    const visibleMovies = [...moviesFromServer].filter(({ title, description }) => (
      title.toLowerCase().includes(query.toLocaleLowerCase().trim())
      || description.toLowerCase().includes(query.toLocaleLowerCase())
    ));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              {/* eslint-disable-next-line */}
              <label htmlFor="search-query" className="label">
                Search movie
              </label>
              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={this.changeQuery()}
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
