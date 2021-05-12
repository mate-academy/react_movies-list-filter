import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchField } from './components/SearchField';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const regex = new RegExp(this.state.query, 'i');
    const movies = moviesFromServer.filter(({ title, description }) => (
      title.search(regex) !== -1 || description.search(regex) !== -1
    ));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchField
              label="Search movie"
              name="query"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </div>

          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
