import React, { Component } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';

import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar/SearchBar';

export class App extends Component {
  state = {
    query: '',
  };

  handlerChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { query } = this.state;
    const filter = query.toLowerCase();
    const filteredMovies = moviesFromServer
      .filter(movie => movie.title.toLowerCase().includes(filter)
      || movie.description.toLowerCase().includes(filter));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <SearchBar searchFilter={this.handlerChange} />
            </div>
          </div>

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
