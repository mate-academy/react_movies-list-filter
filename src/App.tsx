import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface State {
  query: string,
}

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    this.setState({
      query: target.value,
    });
  };

  checkMovies = (...args: string[]) => {
    return args.some(movie => movie.toLowerCase().includes(this.state.query.toLowerCase()));
  };

  render() {
    const { query } = this.state;

    const visibleMovies = moviesFromServer.filter(
      movie => this.checkMovies(movie.title, movie.description),
    );

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
                  value={query}
                  onChange={this.handleChange}
                />
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
