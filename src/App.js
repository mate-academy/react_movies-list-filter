import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchMovie } from './components/SearchMovie';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: moviesFromServer,
  };

  filteredMovies = (query) => {
    const lowerQuery = query.toLowerCase();

    this.setState({
      movies: moviesFromServer
        .filter(movie => (movie.description.toLowerCase().includes(lowerQuery)
        || movie.title.toLowerCase().includes(lowerQuery)
        )),
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchMovie filteredMovies={this.filteredMovies} />
          </div>

          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
