import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBox } from './components/SearchBox';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    visibleMovies: moviesFromServer,
  };

  setVisibleMovies = (movies) => {
    this.setState({
      visibleMovies: movies,
    });
  };

  render() {
    const { visibleMovies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchBox
            setVisibleMovies={this.setVisibleMovies}
            moviesFromServer={moviesFromServer}
          />
          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
