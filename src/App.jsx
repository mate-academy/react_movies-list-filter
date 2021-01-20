import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchMovie } from './components/SeacrhMovie';

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    })
  }

  render() {
    const { query } = this.state;

    const filteredMovies = moviesFromServer
      .filter(  
        movie => (
          movie.title
            .toLowerCase()
            .includes(query.toLowerCase())
        ) || (
          movie.description
            .toLowerCase()
            .includes(query.toLowerCase())
        )
      )

    return (
      <div className="page">
        <div className="page-content">
          <SearchMovie
            prevState={this.state}
            handleChange={this.handleChange}
          />

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
