import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string
};

export class App extends React.Component<{}, State> {
  state = {
    query: '',
  };

  queryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  searchMovie = () => {
    const { query } = this.state;
    const queryToLowerCase = query.toLocaleLowerCase();

    const movies = moviesFromServer.filter(movie => (
      movie.title.toLocaleLowerCase().includes(queryToLowerCase)
      || movie.description.toLowerCase().includes(queryToLowerCase)
    ));

    return movies;
  };

  render() {
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
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    value={this.state.query}
                    onChange={this.queryChange}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={this.searchMovie()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
