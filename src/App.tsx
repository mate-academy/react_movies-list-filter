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

  handleMovieChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  getVisibleMovies = () => {
    const searchQuery = this.state.query.toLowerCase();

    return this.state.movies.filter(
      movie => movie.title.toLowerCase().includes(searchQuery)
      || movie.description.toLowerCase().includes(searchQuery),
    );
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={this.state.query}
                  onChange={this.handleMovieChange}
                />
              </label>
            </div>
          </div>

          <MoviesList movies={this.getVisibleMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
