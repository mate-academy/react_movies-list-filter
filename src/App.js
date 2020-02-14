import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import Input from './Input';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleChangeQuery =(e) => {
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>
              <Input query={query} getQuery={this.handleChangeQuery} />
            </div>
          </div>
          <MoviesList movies={moviesFromServer} query={query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
