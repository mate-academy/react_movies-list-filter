import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    search: '',
  };

  searchHandler = (event) => {
    const { value } = event.target;

    this.setState({
      search: value,
    });
  }

  render() {
    const { search } = this.state;

    const visibleMovies = moviesFromServer.filter(
      (movie) => {
        const { title, description } = movie;

        return (
          title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        || description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );
      },
    );

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
                  value={search}
                  onChange={this.searchHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
