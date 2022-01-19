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

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = (event.target as HTMLInputElement).value;

    this.setState({ query: input });
  };

  render() {
    const allMovies = moviesFromServer;
    const visibleMovies = allMovies.filter((movie) => {
      if (movie.title.toLowerCase().includes(this.state.query.toLowerCase())
        || movie.description.toLowerCase().includes(this.state.query.toLowerCase())) {
        return true;
      }

      return false;
    });

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
                    name="query"
                    value={this.state.query}
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
