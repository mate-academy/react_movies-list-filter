import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  movies: Movie[];
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    movies: [...moviesFromServer],
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  getVisibleMovies = () => {
    const { movies, query } = this.state;
    const queryLoverCase = query.toLowerCase();

    return movies.filter(movie => (
      movie.description.toLowerCase().includes(queryLoverCase)
      || movie.title.toLowerCase().includes(queryLoverCase)));
  };

  render() {
    const { query } = this.state;
    const visibleMovies = this.getVisibleMovies();

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
                    value={query}
                    onChange={this.handleChange}
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
