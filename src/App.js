import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchMovie } from './components/SearchMovie';

export class App extends Component {
  state = {
    movies: moviesFromServer,
  };

  filterMovies = (queryInLowerCase) => {
    const filtredMovies = moviesFromServer.filter(({ title, description }) => {
      const titleInLowerCase = title.toLocaleLowerCase();
      const descriptionInLowerCase = description.toLocaleLowerCase();

      return titleInLowerCase.includes(queryInLowerCase)
        || descriptionInLowerCase.includes(queryInLowerCase);
    });

    this.setState({
      movies: filtredMovies,
    });
  }

  render() {
    const {
      state: { movies },
      filterMovies,
    } = this;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchMovie filterMovie={filterMovies} />
          </div>

          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
