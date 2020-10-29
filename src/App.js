import React, { Component } from 'react';

import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import moviesFromServer from './api/movies.json';

import './App.scss';

export class App extends Component {
  state = {
    visibleMovies: moviesFromServer,
    query: '',
  };

  filterMoviesList = (event) => {
    const value = event.target.value.toLowerCase();

    this.setState({
      query: value,
    });

    this.setState({
      visibleMovies: moviesFromServer.filter(movie => (
        movie.title.toLowerCase().includes(value)
        || movie.description.toLowerCase().includes(value)
      )),
    });
  }

  render() {
    const { query, visibleMovies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchBar
              query={query}
              filterMoviesList={this.filterMoviesList}
            />
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
