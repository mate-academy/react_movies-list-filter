import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Box } from './components/Box/Box';

export class App extends Component {
  state = {
    query: '',
  };

  changeHandler = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <Box query={this.state.query} changeHandler={this.changeHandler} />

          <MoviesList
            movies={moviesFromServer}
            lookedMovie={this.state.query}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
