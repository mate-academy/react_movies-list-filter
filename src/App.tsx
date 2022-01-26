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

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  getVisibleMovies = (movies: Movie[], query: string) => {
    const loweredQuery = query.toLowerCase();

    return movies.filter(movie => movie.title.toLowerCase().includes(loweredQuery)
      || movie.description.toLowerCase().includes(loweredQuery));
  };

  render() {
    const { query } = this.state;
    const visibleMovies = this.getVisibleMovies(moviesFromServer, query);

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie

                <div className="control">
                  <input
                    type="text"
                    value={query}
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    onChange={this.handleSearchChange}
                  />
                </div>
              </label>
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
