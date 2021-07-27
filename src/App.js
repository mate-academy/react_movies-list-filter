import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBar } from './components/SearchBar';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    query: '',
  };

  setQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { movies, query } = this.state;

    const moviesToShow = movies.filter(movie => movie.title.toLowerCase()
      .includes(query.toLowerCase())
    || movie.description.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar content={query} callback={this.setQuery} />
          <MoviesList movies={moviesToShow} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
