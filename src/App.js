import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search/Search';

export class App extends Component {
  state = {};

  searchValue = (event) => {
    this.setState({
      query: event.target.value.toLowerCase(),
    });
  }

  render() {
    const movies = this.state.query
      ? moviesFromServer.filter(movie => movie.title
        .toLowerCase().includes(this.state.query)
        || movie.description.toLowerCase().includes(this.state.query))
      : moviesFromServer;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <Search change={this.searchValue} />
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
