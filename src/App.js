import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchField } from './components/SearchField';

export class App extends Component {
  state = {
    query: '',
  };

  filterMovies = () => (
    moviesFromServer.filter((movie) => {
      const { title, description } = movie;

      return title.toLowerCase().includes(this.state.query.toLowerCase())
        || description.toLowerCase().includes(this.state.query.toLowerCase());
    })
  );

  render() {
    return (
      <div className="page">
        <div className="page-content">

          <SearchField
            value={this.state.query}
            onChange={(event) => {
              this.setState({
                query: event.target.value,
              });
            }}
          />

          <MoviesList
            movies={this.state.query
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
