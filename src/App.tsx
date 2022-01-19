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
    let movies = [...moviesFromServer as Movie[]];

    if (query) {
      movies = movies
        .filter(movie => movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
          || movie.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    }

    return movies;
  };

  render() {
    const { query } = this.state;

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
                  value={query}
                  onChange={(event) => {
                    this.setState({ query: event.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          {this.getFilteredMovies().length !== 0 && (
            <MoviesList movies={this.getFilteredMovies()} />
          )}
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
