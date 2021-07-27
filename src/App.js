import React, { Component } from 'react';
import './App.scss';
import { SearchField } from './components/SearchField';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  addToQuery = (event) => {
    this.setState({
      query: event.target.value.toLowerCase(),
    });
  }

  render() {
    const { query } = this.state;

    const filteredMovies = moviesFromServer.filter(
      movie => movie.title.toLowerCase().includes(query)
        || movie.description.toLowerCase().includes(query),
    );

    return (
      <div className="page">
        <div className="page-content">
          <SearchField
            labelContent="Search movie"
            value={query}
            onChange={this.addToQuery}
          />
          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
