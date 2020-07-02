import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar/SearchBar';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: moviesFromServer,
  };

  handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();

    this.setState({
      query: moviesFromServer.filter(
        movie => movie.title.toLowerCase().includes(searchValue)
        || movie.description.toLowerCase().includes(searchValue),
      ),
    });
  }

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar onChange={this.handleSearch} />
          <MoviesList movies={query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
