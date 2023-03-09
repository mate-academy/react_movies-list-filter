import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterBySubstr(string: string, substring: string) {
  const validatedStr = string.toLowerCase();
  const validatedSubstr = substring.toLowerCase().trim();

  return validatedStr.includes(validatedSubstr);
}

function prepareMovies(query: string) {
  return moviesFromServer.filter(movie => {
    const { title, description } = movie;

    return filterBySubstr(title, query) || filterBySubstr(description, query);
  });
}

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state = {
    query: '',
  };

  hadleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  render() {
    const visibleMovies = prepareMovies(this.state.query);

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={this.state.query}
                  onChange={this.hadleChange}
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
