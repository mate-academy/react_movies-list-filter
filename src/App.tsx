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

  getFilteredMovies = () => {
    const lowerCaseSearchWord = this.state.searchWord.toLocaleLowerCase();

    // eslint-disable-next-line no-console
    console.log(this.state.searchWord);

    return moviesFromServer.filter(
      movie => movie.title.toLowerCase().includes(lowerCaseSearchWord)
      || movie.description.toLowerCase().includes(lowerCaseSearchWord),
    );
  };

  searchBarHandler(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      searchWord: event?.target.value,
    });
  }

  render() {
    const visibleMovies = this.getFilteredMovies();

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
                      this.searchBarHandler(event);
                    }}
                    className="input"
                    placeholder="Type search word"
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
