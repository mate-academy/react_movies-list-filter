import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search/Search';

export class App extends Component {
  state = {
    query: moviesFromServer,
  };

  searchValue = (event) => {
    const searchQuery = event.target.value.toLowerCase();

    this.setState({
      query: moviesFromServer
        .filter(movie => movie.title.toLowerCase().includes(searchQuery)
        || movie.description.toLowerCase().includes(searchQuery)),
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <Search change={this.searchValue} />
            </div>
          </div>
          <MoviesList movies={this.state.query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
