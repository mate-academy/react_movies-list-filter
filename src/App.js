import React, { Component } from 'react';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

import './App.scss';

export class App extends Component {
  state = {
    search: '',
  };

  searchMovie = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { search } = this.state;

    const filteredMovies = moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(search.toLowerCase())
      || movie.description.toLowerCase().includes(search.toLowerCase())
    ));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <Search search={search} searchMovie={this.searchMovie} />
            </div>
          </div>

          <MoviesList filteredMovies={filteredMovies} search={search} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
