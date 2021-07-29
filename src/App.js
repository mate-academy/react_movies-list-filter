import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search/Search';

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ query: value.toLocaleLowerCase() });
  }

  filterMovies = () => {
    const { query } = this.state;

    return moviesFromServer.filter(
      movie => movie.title.toLocaleLowerCase().includes(query)
      || movie.description.toLocaleLowerCase().includes(query),
    );
  }

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <Search onChange={this.handleChange} query={query} />

          <MoviesList movies={
            query
              ? this.filterMovies()
              : moviesFromServer}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
