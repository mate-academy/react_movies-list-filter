import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
  // movies: Movie[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
    // movies: [...moviesFromServer],
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(() => ({
      query: event.target.value,
    }));
  };

  render() {
    const filteredMovies = moviesFromServer
      .filter(movie => {
        return (
          movie.title.toLowerCase().includes(this.state.query.toLowerCase())
          || movie.description.toLowerCase().includes(this.state.query.toLowerCase())
        );
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
                    value={this.state.query}
                    onChange={this.handleChange}
                    placeholder="Type search word"
                  />
                </div>
              </label>

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
