import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;
    const visibleMovies = moviesFromServer
      .filter(movie => {
        const lowered = query.toLowerCase();

        return movie.title.toLowerCase().includes(lowered)
          || movie.description.toLowerCase().includes(lowered);
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
                    name="query"
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    value={query}
                    onChange={this.handlerChange}
                  />
                </label>
              </div>
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
