import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  inputValue: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    inputValue: '',
  };

  changeInput = (text: string) => {
    this.setState({ inputValue: text });
  };

  render() {
    const { inputValue } = this.state;

    const filteredMovies: Movie[] = moviesFromServer.filter(movie => {
      if (movie.title.toLowerCase().includes(inputValue.toLowerCase())
      || movie.description.toLowerCase().includes(inputValue.toLowerCase())) {
        return movie;
      }

      return false;
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
                    placeholder="Type search word"
                    value={this.state.inputValue}
                    onChange={(event) => this.changeInput(event.target.value)}
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
