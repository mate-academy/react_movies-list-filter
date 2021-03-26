import React, { Component } from 'react';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';
import './App.scss';

export class App extends Component {
  state = {
    query: '',
    filteredMovies: moviesFromServer,
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });

    this.filterMovies();
  };

  filterMovies = () => {
    this.setState(prevState => ({
      filteredMovies: moviesFromServer.filter((movie) => {
        const { title, description } = movie;

        return title.toLowerCase().includes(prevState.query.toLowerCase())
          || description.toLowerCase().includes(prevState.query.toLowerCase());
      }),
    }));
  };

  render() {
    const { query, filteredMovies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <Search query={query} onChange={this.handleChange} />

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
