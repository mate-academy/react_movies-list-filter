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

  filterMovies = (movies: Movie[]) => (
    movies.filter(movie => {
      const { query } = this.state;
      const normilizedQuery = query.toLowerCase();

      return (
        (movie.title.toLowerCase()).includes(normilizedQuery)
          || (movie.description.toLowerCase()).includes(normilizedQuery)
      );
    })
  );

  queryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const { query } = this.state;

    const visibleMovies = this.filterMovies(moviesFromServer);

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
                    onChange={this.queryChange}
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
