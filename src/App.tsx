/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface State {
  query: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  getFilteredMovie = () => {
    const { query } = this.state;

    const queryToLowerCase = query.toLowerCase();

    return moviesFromServer.filter((movie) => (
      movie.title.toLowerCase().includes(queryToLowerCase)
      || movie.description.toLowerCase().includes(queryToLowerCase)
    ));
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  render() {
    const { query } = this.state;
    const visibleMovies = this.getFilteredMovie();

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

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
