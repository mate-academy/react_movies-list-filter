import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: moviesFromServer,
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
    this.moviesFilter();
  }

  moviesFilter = () => {
    const { query } = this.state;

    this.setState(() => ({
      movies: moviesFromServer.filter((film) => {
        const title = film.title.toLocaleLowerCase();
        const description = film.description.toLocaleLowerCase();

        return (
          title.includes(query.toLocaleLowerCase())
          || description.includes(query.toLocaleLowerCase())
        );
      }),
    }));
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
                  defaultValue={this.state.query}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
