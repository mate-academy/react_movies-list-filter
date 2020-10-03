import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search/Search';

export class App extends Component {
  state = {
    query: '',
    movies: [...moviesFromServer],
  };

  changeQuery = (query) => {
    this.setState({ query });
  }

  filterMovies = () => {
    this.setState(state => (
      { movies: moviesFromServer.filter(({ title, description }) => (
        (title + description).toLowerCase()
          .includes(state.query.toLowerCase()))) }));
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">

          <Search
            changeQuery={this.changeQuery}
            filterMovies={this.filterMovies}
            query={this.state.query}
          />

          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
