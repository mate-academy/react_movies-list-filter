import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';

export class App extends Component {
  state = {
    query: '',
  };

  updateQuery = (onChangeEvent) => {
    this.setState({
      query: onChangeEvent.target.value.toLowerCase(),
    });
  }

  filterMoviesList() {
    const { query } = this.state;

    if (!query) {
      return moviesFromServer;
    }

    return moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(query)
      || movie.description.toLowerCase().includes(query)
    ));
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <Search onChange={this.updateQuery} />
          <MoviesList movies={this.filterMoviesList()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
