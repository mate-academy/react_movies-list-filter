import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  searchInput: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    searchInput: '',
  };

  getVisibleMovies = (movies: Movie[], searchInput: string): Movie[] => {
    return movies.filter(movie => {
      const lowerCaseSearchInput = searchInput.toLowerCase();

      return movie.title.toLowerCase().includes(lowerCaseSearchInput)
        || movie.description.toLowerCase().includes(lowerCaseSearchInput);
    });
  };

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { searchInput } = this.state;
    const visibleMovies = this.getVisibleMovies(moviesFromServer, searchInput);

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
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    value={searchInput}
                    onChange={this.handleSearchChange}
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
