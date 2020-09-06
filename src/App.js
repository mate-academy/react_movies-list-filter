import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: null,
  };

  changeHandler = (event) => {
    const query = event.target.value;

    this.setState({
      query,
    });
  }

  render() {
    let filteredMovie;
    const { query } = this.state;

    if (query) {
      filteredMovie = moviesFromServer.filter(movie => (
        movie.title.toLocaleLowerCase().includes(query.toLowerCase())
        || movie.description.toLowerCase().includes(query.toLowerCase())
      ));
    } else {
      filteredMovie = moviesFromServer;
    }

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
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filteredMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
