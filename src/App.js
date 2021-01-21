import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  searchMovie = () => {
    const { query } = this.state;

    const filtredMovies = [...moviesFromServer].filter(movie => (
      movie.title.toLowerCase().includes(query.toLocaleLowerCase())
      || movie.description.toLowerCase().includes(query.toLocaleLowerCase())
    ));

    return filtredMovies;
  }

  handleChange = (event) => {
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
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={this.state.query}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.searchMovie()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
