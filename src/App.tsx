import React from 'react';
import './App.scss';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

type State = {
  inputValue: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    inputValue: '',
  };

  changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({ inputValue: value });
  };

  getFilteredMovies = (inputValue: string) => {
    return (moviesFromServer.filter(movie => movie.title.toLowerCase()
      .includes(inputValue.toLowerCase())
      || movie.description.toLowerCase().includes(inputValue.toLowerCase())) || null);
  };

  render() {
    const { inputValue } = this.state;
    const moviesToShow = this.getFilteredMovies(inputValue);

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
                    value={inputValue}
                    onChange={this.changeInput}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={moviesToShow} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
