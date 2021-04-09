import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';

export class App extends Component {
  state = {
    visibleMovies: [...moviesFromServer],
  };

  handleChange = (query) => {
    const lowerCaseQuery = query.toLowerCase();

    this.setState({
      visibleMovies: moviesFromServer.filter(movie => (
        (movie.title + movie.description).toLowerCase().includes(lowerCaseQuery)
      )),
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <Search onChange={this.handleChange} />
          <MoviesList movies={this.state.visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
