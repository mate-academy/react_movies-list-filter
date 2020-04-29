import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import SearchBar from './components/searcField/SearchField';

export class App extends Component {
  state = {
    search: '',
  };

  searchField = (search) => {
    this.setState({ search });
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchBar callBack={this.searchField} />
          {(this.state.search.length === 0)
            ? <MoviesList movies={moviesFromServer} />
            : (
              <MoviesList movies={
                moviesFromServer.filter((movie) => {
                  const str = (movie.title + movie.description).toLowerCase();

                  if (str.includes(this.state.search)) {
                    return movie;
                  }
                })
              }
              />
            )
          }
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
