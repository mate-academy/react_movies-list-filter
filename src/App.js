import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import InputBox from './components/InputBox/InputBox';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  searchQuery = (event) => {
    this.setState({
      query: event.target.value.toLowerCase(),
    });
  };

  render() {
    const { query } = this.state;

    const callbackSearch = movie => movie.title.toLowerCase().includes(query)
        || movie.description.toLowerCase().includes(query);

    const filteredResult = moviesFromServer.filter(callbackSearch);

    return (
      <div className="page">
        <div className="page-content">
          <InputBox onChange={this.searchQuery} />
          <MoviesList movies={query ? filteredResult : moviesFromServer} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
