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

  getFilteredMovies = () => {
    const { query } = this.state;

    const filteredMovies = moviesFromServer
      .filter(movie => (movie.title.toLowerCase().includes(query.toLowerCase()))
        || (movie.description.toLowerCase().includes(query.toLowerCase())));

    return filteredMovies;
  };

  searchResult = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const filteredMovies = this.getFilteredMovies();

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
                  value={this.state.query}
                  onChange={this.searchResult}
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
