import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBox } from './components/SearchBox';

export class App extends Component {
  state = {
    query: '',
  };

  getGuery = (event) => {
    this.setState({
      query: event,
    });
  }

  render() {
    const { query } = this.state;
    const lowQuery = query.toLowerCase();

    const filtredMovie = moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(lowQuery)
      || movie.description.toLowerCase().includes(lowQuery)
    ));

    return (
      <div className="page">
        <div className="page-content">
          <SearchBox
            query={query}
            returnValue={this.getGuery}
          />
          <MoviesList movies={filtredMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
