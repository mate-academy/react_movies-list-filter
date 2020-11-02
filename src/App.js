import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBar } from './components/searchBar/SearchBar';

export class App extends Component {
  state = {
    query: '',
    movies: moviesFromServer,
  };

  findMovie = () => this.state.movies.filter((movie) => {
    const substring = this.state.query.toUpperCase();
    const title = movie.title.toUpperCase();
    const description = movie.description.toUpperCase();

    return (title.includes(substring) || description.includes(substring));
  })

  onQueryChange = (inputText) => {
    this.setState({ query: inputText });
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

              <div className="control">
                <SearchBar query={query} onChange={this.onQueryChange} />
              </div>
            </div>
          </div>

          <MoviesList movies={this.findMovie()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
