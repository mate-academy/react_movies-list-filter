import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchQuery } from './components/SearchQuery';

export class App extends Component {
  state = {
    visibleFilms: [...moviesFromServer],
  };

  filterFilm = (value) => {
    const lowerQuery = value.toLowerCase().trim();

    this.setState({
      visibleFilms: moviesFromServer
        .filter(film => film.title.toLowerCase().includes(lowerQuery)
              || film.description.toLowerCase().includes(lowerQuery)),
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchQuery filterFilm={this.filterFilm} />
          </div>
          <MoviesList movies={this.state.visibleFilms} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
