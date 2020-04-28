import React, { Component } from 'react';
import './App.scss';
import debounce from 'lodash/debounce';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import SearchPanel from './components/SearchPanel';

export class App extends Component {
  state = {
    query: '',
  };

  onSearchChange = debounce((query) => {
    this.setState(prevState => ({ query }));
  }, 500);

  searchItems = (items, query) => {
    if (query.length === 0) {
      return items;
    }

    const searchedItems = items.filter(
      ({ title, description }) => title
        .toLowerCase()
        .indexOf(query.toLowerCase()) > -1
        || description.toLowerCase().indexOf(query.toLowerCase()) > -1,
    );

    return searchedItems;
  };

  render() {
    const visibleMovies = this.searchItems(moviesFromServer, this.state.query);

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>
              <div className="control">
                <SearchPanel
                  className="input"
                  placeholder="Type search word"
                  onSearchChange={this.onSearchChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">Sidebar goes here</div>
      </div>
    );
  }
}
