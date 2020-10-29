import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    moviesList: moviesFromServer,
  };

  onFilter = (event) => {
    const { value } = event.target;
    const regexp = new RegExp(value, 'gi');

    this.setState({
      query: value,
      moviesList: moviesFromServer
        .filter(movie => (
          movie.title.match(regexp) || movie.description.match(regexp)
        )),
    });
  }

  render() {
    const { query, moviesList } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <Search onChange={this.onFilter} query={query} />
          </div>

          <MoviesList movies={moviesList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
