import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';

export class App extends Component {
  state = {
    search: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { search } = this.state;

    const filteredMovies = moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(search.toLowerCase())
      || movie.description.toLowerCase().includes(search.toLowerCase())));

    return (
      <div className="page">
        <div className="page-content">
          <Search
            search={search}
            handleChange={this.handleChange}
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
