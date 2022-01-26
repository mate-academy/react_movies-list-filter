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

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { searchInput } = this.state;
    const visibleMovies = moviesFromServer.filter(movie => {
      return movie.title.toLowerCase().includes(searchInput.toLowerCase())
        || movie.description.toLowerCase().includes(searchInput.toLowerCase());
    });

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
