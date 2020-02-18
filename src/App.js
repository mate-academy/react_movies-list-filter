import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search/Search';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  changeHandler = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    const filteredMovies = moviesFromServer.filter(movie => (
      movie.title.toLowerCase()
        .includes(this.state.query.toLowerCase())
      || movie.description.toLowerCase()
        .includes(this.state.query.toLowerCase())));

    return (
      <div className="page">
        <div className="page-content">
          <Search handler={this.changeHandler} />
          {filteredMovies.length
            ? <MoviesList movies={filteredMovies} />
            : 'No such movie...'}
        </div>
        <div className="sidebar">Sidebar goes here</div>
      </div>
    );
  }
}
