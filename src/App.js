import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { InputSearch } from './components/InputSearch/InputSearch';

export class App extends Component {
  state = {
    query: '',
  };

  filteredMovies = () => moviesFromServer
    .filter(movie => (
      movie.title.toUpperCase()
        .includes(this.state.query.toUpperCase())
      || movie.description.toUpperCase()
        .includes(this.state.query.toUpperCase())
    ));

  changeHandler = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <InputSearch
                  value={this.state.query}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.filteredMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
