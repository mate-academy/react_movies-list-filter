import React from 'react';
import './App.scss';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

type State = {
  inputValue: string,
  filteredMovies: Movie[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    inputValue: '',
    filteredMovies: moviesFromServer,
  };

  changeInput = (text: string) => {
    this.setState({ inputValue: text });

    this.getFilteredMovies();
  };

  getFilteredMovies = () => {
    const { inputValue } = this.state;

    this.setState({
      filteredMovies: moviesFromServer.filter(movie => {
        if (movie.title.toLowerCase().includes(inputValue.toLowerCase())
        || movie.description.toLowerCase().includes(inputValue.toLowerCase())) {
          return movie;
        }

        return false;
      }),
    });
  };

  render() {
    const { filteredMovies } = this.state;

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
                    value={this.state.inputValue}
                    onChange={event => this.changeInput(event.target.value)}
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
