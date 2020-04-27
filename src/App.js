import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import Search from './components/Search/Search';

export class App extends Component {
  state = {
    query: '',
  };

  onChangeHandler = (event) => {
    this.setState({ query: event.target.value });
  }

  render() {
    const filteredMovies = moviesFromServer.filter(movie => (
      movie.title.toLowerCase()
        .includes(this.state.query.toLowerCase())
      || movie.description.toLowerCase()
        .includes(this.state.query.toLowerCase())
    ));

    return (
      <div className="page">
        <div className="page-content">
          <Search handler={this.onChangeHandler} />
          {filteredMovies.length
            ? <MoviesList movies={filteredMovies} />
            : 'No results found'}
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
