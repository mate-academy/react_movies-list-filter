import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Filter } from './components/Filter';

export class App extends Component {
  state = {
    query: '',
  };

  onChange = event => (
    this.setState({
      query: event.target.value.toLowerCase(),
    })
  );

  filterByMovies = () => (
    this.state.query.length === 0
      ? [...moviesFromServer]
      : [...moviesFromServer].filter(
        (movie) => {
          const { title, description } = movie;
          const { query } = this.state;

          return title.toLowerCase().includes(query)
            || description.toLowerCase().includes(query);
        },
      )
  );

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <Filter defaultValue={query} onChange={this.onChange} />
          </div>

          <MoviesList movies={this.filterByMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
