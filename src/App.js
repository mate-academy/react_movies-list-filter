import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBar } from './components/searchBar/searchBar';

export class App extends Component {
  state = {
    query: '',
    movies: [...moviesFromServer],
  };

  filteredMovies = () => this.state.movies.filter(
    movie => movie
      .title
      .toLowerCase()
      .includes(this.state.query.toLowerCase())
      || movie
        .description
        .toLowerCase()
        .includes(this.state.query.toLowerCase()),
  );

  onChange=(event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchBar
              query={this.state.query}
              onChange={this.onChange}
            />
          </div>

          <MoviesList
            movies={this.filteredMovies()}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
