import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  updateData = value => this.setState({ query: value });

  render() {
    const { query } = this.state;

    const searchMovies = moviesFromServer.filter(filmSearch);

    function filmSearch(item) {
      const queryLow = query.toLowerCase();
      const title = item.title.toLowerCase().includes(queryLow);
      const description = item.description.toLowerCase().includes(queryLow);

      return title || description;
    }

    return (
      <div className="page">
        <div className="page-content">
          <Search updateData={this.updateData} />

          <MoviesList movies={searchMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
