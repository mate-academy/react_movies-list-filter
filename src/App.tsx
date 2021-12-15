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

  handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  filterMovies = () => {
    return (
      moviesFromServer.filter((movie) => {
        const queryLowerCase = this.state.query.toLowerCase();
        const movieTitleLowerCase = movie.title.toLowerCase();
        const movieDescriptionLowerCase = movie.description.toLowerCase();

        return (
          movieDescriptionLowerCase.includes(queryLowerCase)
          || movieTitleLowerCase.includes(queryLowerCase)
        );
      })
    );
  };

  render() {
    const { query } = this.state;
    const { handleOnChange, filterMovies } = this;
    const visibleMovies = filterMovies();

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
                    onChange={handleOnChange}
                    value={query}
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
