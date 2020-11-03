import React, { Component } from 'react';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

import './App.scss';

export class App extends Component {
  state = {
    search: '',
    movies: moviesFromServer,
  };

  searchMovie = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      movies: moviesFromServer.filter(movie => (
        movie.title.toLowerCase().includes(value.toLowerCase())
        || movie.description.toLowerCase().includes(value.toLowerCase())
      )),
    });
  }

  render() {
    const { search, movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <Search search={search} searchMovie={this.searchMovie} />
            </div>
          </div>

          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
