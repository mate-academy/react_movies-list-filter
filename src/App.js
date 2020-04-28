import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import SearchBox from './components/SearchBox/SearchBox';

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    const phrase = this.state.query;
    const reg = new RegExp(phrase, 'i');
    const requestedVideos = moviesFromServer.filter(item => (
      reg.test(item.title) || reg.test(item.description)
    ));
    const movies = this.state.query
      ? requestedVideos
      : moviesFromServer;

    return (
      <div className="page">
        <div className="page-content">
          <SearchBox handleChange={this.handleChange} />
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
