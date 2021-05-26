import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    userRequest: '',
  };

  searchFilm = (event) => {
    this.setState({
      userRequest: event.target.value,
    });
  }

  render() {
    const visibleFilms = moviesFromServer.filter(
      m => m.title.toLowerCase().includes(
        this.state.userRequest.toLowerCase(),
      )
        || m.description.toLowerCase().includes(
          this.state.userRequest.toLowerCase(),
        ),
    );

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
                {' '}
                {this.state.filmName}
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={this.searchFilm}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={visibleFilms} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
