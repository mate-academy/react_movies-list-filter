import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';

export class App extends Component {
  state = {
    query: '',
    moviesList: moviesFromServer,
  };

  onFilter = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
    this.setState({
      moviesList: moviesFromServer
        .filter(movie => (
          movie.title.toLowerCase().includes(value.toLowerCase())
          || movie.description.toLowerCase().includes(value.toLowerCase())
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
