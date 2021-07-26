import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchField } from './components/SearchField/SearchField';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  addQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { query } = this.state;
    const queryToLower = query.toLowerCase();

    const choiceMovie = moviesFromServer.filter(
      movie => movie.description.toLowerCase().includes(
        queryToLower,
      )
    || movie.title.toLowerCase().includes(queryToLower),
    );

    return (
      <div className="page">
        <div className="page-content">
          <SearchField value={query} onChange={this.addQuery} />

          <MoviesList movies={choiceMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
