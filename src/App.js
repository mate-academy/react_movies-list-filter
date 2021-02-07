import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchMovie } from './components/SearchMovie';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: moviesFromServer,
  };

  filterMovies = (query) => {
    this.setState({
      query: null,
      movies: moviesFromServer.filter(movie => (
        movie.title.toLowerCase().includes(query.toLowerCase())
        || movie.description.toLowerCase().includes(query.toLowerCase())
      )),
    });
  }

  render() {
    const { query, movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchMovie
              query={query}
              filterMovies={this.filterMovies}
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
