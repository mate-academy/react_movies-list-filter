import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchField } from './components/SearchField';

export class App extends Component {
  state = {
    movies: moviesFromServer,
  };

  onSearch = (query) => {
    this.setState({
      movies: moviesFromServer.filter((movie) => {
        const lowerCaseQuery = query.toLowerCase().trim();
        const lowerCaseTitle = movie.title.toLowerCase();
        const lowerCaseDescription = movie.description.toLowerCase();

        return (
          lowerCaseTitle.includes(lowerCaseQuery)
          || lowerCaseDescription.includes(lowerCaseQuery)
        );
      }),
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchField onSearch={this.onSearch} />
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
