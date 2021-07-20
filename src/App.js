import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import SearchBar from './components/SearchBar/SearchBar';

export class App extends Component {
  state = {
    query: '',
    movies: [...moviesFromServer],
  };

  getFindedMovies = () => {
    const queryToLowerCase = this.state.query.toLocaleLowerCase();
    const filtred = this.state.movies.filter(movie => (
      movie.title.toLowerCase().indexOf(queryToLowerCase) !== -1
        || movie.description.toLowerCase().indexOf(queryToLowerCase) !== -1
    ));

    return filtred;
  };

  setAppState = (value) => {
    this.setState({ query: value });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchBar classApp={this} />
          </div>

          <MoviesList
            movies={this.getFindedMovies()}
            query={this.state.query}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
