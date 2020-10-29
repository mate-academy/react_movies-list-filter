import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchMovies } from './components/SearchMovies';

export class App extends Component {
  state = {
    query: '',
  };

  changeHandler = (event) => {
    this.setState({ query: event.target.value });
  }

  searchForMatches(section) {
    const { query } = this.state;

    return section.toLowerCase().includes(query.toLowerCase());
  }

  render() {
    const { query } = this.state;

    const filterMovies = moviesFromServer.filter(({ title, description }) => (
      this.searchForMatches(title) || this.searchForMatches(description)
    ));

    return (
      <div className="page">
        <div className="page-content">
          <SearchMovies
            query={query}
            changeHandler={this.changeHandler}
          />
          <MoviesList movies={filterMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
