import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchField } from './components/SearchField';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    search: '',
    movies: [...moviesFromServer],
  };

  searchFilms = (event) => {
    const currentValue = event.target.value;

    this.setState({
      search: currentValue,
      movies: moviesFromServer.filter(movie => (
        movie.title.toLowerCase().includes(currentValue.toLowerCase())
        || movie.description.toLowerCase().includes(currentValue.toLowerCase())
      )),
    });
  };

  render() {
    const { movies, search } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchField
              inputValue={search}
              handleChange={this.searchFilms}
            />
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
