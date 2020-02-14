import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import SearchBar from './components/SearchBar/SearchBar';
import moviesFromServer from './api/movies.json';

const filterMovies = (movies, filter) => movies
  .filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase())
    || movie.description.toLowerCase().includes(filter.toLowerCase()));

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    const { query } = this.state;
    const movies = filterMovies(moviesFromServer, query);

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchBar onChangeFilter={this.handleChange} />
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
