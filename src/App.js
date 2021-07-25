import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    querry: '',
  };

  handleChanges = (event) => {
    const { value } = event.target;

    this.setState({
      querry: value.toLowerCase(),
    });
  }

  render() {
    const { querry } = this.state;
    const filteredFilms = moviesFromServer.filter(movie => movie
      .description.toLowerCase().includes(querry)
      || movie.title.toLowerCase().includes(querry));

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
                  value={querry}
                  onChange={this.handleChanges}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filteredFilms} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
