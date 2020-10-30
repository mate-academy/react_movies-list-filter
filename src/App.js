import React, { Component } from 'react';
import './App.scss';
import { Search } from './components/Search';
import { MoviesList } from './components/MoviesList';

import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    moviesList: moviesFromServer,
  };

  moviesFilter = (event) => {
    const { value } = event.target;
    const filterWord = value.toLowerCase();

    this.setState({
      query: value,
      moviesList: moviesFromServer.filter(movie => (
        movie.title.toLowerCase().includes(filterWord)
        || movie.description.toLowerCase().includes(filterWord)
      )),
    });
  }

  render() {
    const { query, moviesList } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <Search
                query={query}
                moviesFilter={this.moviesFilter}
              />
            </div>
          </div>

          <MoviesList movies={moviesList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
