import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import Input from './components/Search';

export class App extends Component {
  state = {
    query: moviesFromServer,
  };

  search = (event) => {
    const searchPhrase = event.target.value.toLowerCase();
    const newMovies = moviesFromServer.filter((film) => {
      const title = film.title.toLowerCase();
      const description = film.description.toLowerCase();

      return title.includes(searchPhrase)
      || description.includes(searchPhrase);
    });

    this.setState(() => ({
      query: newMovies,
    }));
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <Input param={this.search} />
          <MoviesList movies={this.state.query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
