import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: moviesFromServer,
  };

  handleTyping = (typingEvent) => {
    this.setState({
      query: typingEvent.target.value,
    });
  }

  render() {
    const { query, movies } = this.state;
    const filtredMovies = movies.filter(film => film.description.toLowerCase()
      .includes(this.state.query.toLowerCase())
      || film.title.toLowerCase()
        .includes(this.state.query.toLowerCase()));

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
                  value={query}
                  onChange={this.handleTyping}
                />
              </div>
            </div>
          </div>
          <MoviesList movies={filtredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
