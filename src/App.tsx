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
    const input = event.currentTarget.value;

    this.setState({ query: input });
  };

  getCorrectMovies = (movies: Movie[]) => {
    const queryLower = this.state.query.toLowerCase();
    const correctMovies = movies.filter(movie => {
      if (movie.title.toLowerCase().includes(queryLower)
        || movie.description.toLowerCase().includes(queryLower)) {
        return true;
      }

      return false;
    });

    return correctMovies;
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
                    name="query"
                    value={this.state.query}
                    onChange={this.handleChange}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={this.getCorrectMovies(moviesFromServer)} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
