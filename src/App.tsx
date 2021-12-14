import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  searchQuery: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    searchQuery: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  render() {
    const visibleMovies = [...moviesFromServer].filter((film) => {
      const isTitleIcnludeSearchQuery = (
        film.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
      );

      const isDescriptionIncludeSearchQuery = (
        film.description.toLowerCase().includes(this.state.searchQuery.toLowerCase())
      );

      return isTitleIcnludeSearchQuery || isDescriptionIncludeSearchQuery;
    });

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
                  name="searchQuery"
                  id="search-query"
                  value={this.state.searchQuery}
                  className="input"
                  placeholder="Type search word"
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
