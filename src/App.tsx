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

  setQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  filterMovies = () => {
    const { query } = this.state;

    return moviesFromServer.filter(movie => {
      const { title, description } = movie;

      return title.toLowerCase().includes(query)
             || description.toLowerCase().includes(query);
    });
  };

  render() {
    const filteredMovies = this.filterMovies();

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
                  value={this.state.query}
                  onChange={this.setQuery}
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
