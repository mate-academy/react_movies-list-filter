import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Searcher } from './components/Searcher';

import moviesFromServer from './api/movies.json';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      listOfMovies: moviesFromServer,
    };
  }

  handleChange = (query) => {
    this.setState({ query });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <Searcher
              onChangeQuery={this.handleChange}
            />
          </div>
          <MoviesList movies={this.state.listOfMovies.filter(({
            title, description,
          }) => title.toLowerCase().includes(
            this.state.query.toLocaleLowerCase(),
          )
             || description.toLowerCase().includes(
               this.state.query.toLowerCase(),
             ))}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
