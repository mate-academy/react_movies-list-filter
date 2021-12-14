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

  render() {
    const visibleMovie = moviesFromServer.filter(movie => {
      const queryLower = this.state.query.toLowerCase();
      const titleLower = movie.title.toLowerCase();
      const descriptionLower = movie.description.toLowerCase();

      return (
        titleLower.includes(queryLower) || descriptionLower.includes(queryLower)
      );
    });

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <div className="control">
                <label htmlFor="search-query" className="label">
                  Search movie
                  <input
                    type="text"
                    id="search-query"
                    className="input"
                    onChange={(event) => {
                      this.setState({ query: event.target.value });
                    }}
                    placeholder="Type search word"
                  />
                </label>
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
