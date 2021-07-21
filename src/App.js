import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import FilteredFilm from './components/FilteredFilm/FilteredFilm';

export class App extends Component {
  state = {
    query: '',
  };

  isChangedQuery = (event) => {
    this.setState({ query: event.target.value });
  }

  isFiltredMovies = () => moviesFromServer.filter((item) => {
    const { query } = this.state;
    const { title, description } = item;

    if (this.state.query.length > 0) {
      return (title.toLowerCase().includes(query.toLowerCase())
        || (description.toLowerCase().includes(query.toLowerCase())
        ));
    }

    return item;
  })

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <FilteredFilm
            query={this.state.query}
            onChange={this.isChangedQuery}
          />
          <MoviesList movies={this.isFiltredMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
