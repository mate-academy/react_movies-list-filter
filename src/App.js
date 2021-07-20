import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import SearchField from './components/SearchField/SearcshField';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  ChangeQuery = event => this.setState({
    query: event.target.value,
  })

  render() {
    const { query } = this.state;

    const neededMovie = moviesFromServer.filter(
      movie => movie.description.toLowerCase().includes(
        this.state.query.toLowerCase(),
      )
      || movie.title.toLowerCase().includes(this.state.query.toLowerCase()),
    );

    return (
      <div className="page">
        <div className="page-content">
          <SearchField
            value={query}
            onChange={this.ChangeQuery}
          />
          <MoviesList
            movies={neededMovie}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
