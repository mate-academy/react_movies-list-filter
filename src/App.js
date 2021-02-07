import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchInput } from './components/SearchInput';

export class App extends Component {
  state = {
    query: '',
  };

  setSearchQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  findQueryInMovieCard = (movie, query) => {
    const serchElement = query.toLowerCase().trim();

    return (!!(movie.title.toLowerCase().includes(serchElement)
    || movie.description.toLowerCase().includes(serchElement)));
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchInput
            setSearchQuery={this.setSearchQuery}
          />
          <MoviesList
            searchMovie={this.findQueryInMovieCard}
            query={this.state.query}
            movies={moviesFromServer}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
