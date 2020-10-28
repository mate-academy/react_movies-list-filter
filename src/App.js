import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: moviesFromServer,
  };

  filterMovies = (query) => {
    const filterQuery = query.toLowerCase();

    this.setState({
      query,
      movies: moviesFromServer.filter(movie => (
        movie.title.toLowerCase().includes(filterQuery)
        || movie.description.toLowerCase().includes(filterQuery)
      )),
    });
  }

  render() {
    const { query, movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <Search
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
