import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchField } from './components/SearchField';

export class App extends Component {
  state = {
    query: '',
  };

  hadleChange = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  }

  prepareMovies = (query) => {
    if (!query) {
      return [...moviesFromServer];
    }

    const filteredMovies = [...moviesFromServer].filter((movie) => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      return title.includes(query.toLowerCase())
      || description.includes(query.toLowerCase());
    });

    return filteredMovies;
  }

  render() {
    const { query } = this.state;
    const preparedMovies = this.prepareMovies(query);

    return (
      <div className="page">
        <div className="page-content">
          <SearchField query={query} onChange={this.hadleChange} />

          <MoviesList movies={preparedMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
