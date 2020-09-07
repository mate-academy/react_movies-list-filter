import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handlerInput = (event) => {
    const { target } = event;

    return this.setState({
      query: target.value.toLowerCase(),
    });
  }

  filterFilms = () => moviesFromServer.filter((movie) => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return (title + description).includes(this.state.query);
  })

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
                  onChange={this.handlerInput}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.filterFilms()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
