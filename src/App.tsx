import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  searchWord: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    searchWord: '',
  };

  filteredMovies = () => {
    const { searchWord } = this.state;

    return moviesFromServer.filter(
      movie => movie.title.toLowerCase().includes(searchWord.toLocaleLowerCase())
      || movie.description.toLowerCase().includes(searchWord.toLocaleLowerCase()),
    );
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
                    onChange={(event) => {
                      this.setState({
                        searchWord: event?.target.value,
                      });
                    }}
                    className="input"
                    placeholder="Type search word"
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={this.filteredMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
