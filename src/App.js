import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  change = (evt) => {
    this.setState({
      query: evt.target.value,
    });
  }

  render() {
    const { query } = this.state;

    const filtered = moviesFromServer.filter(movie => (
      movie.title.toLocaleLowerCase().includes(query)
      || movie.description.toLowerCase().includes(query)
    ));

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
                  onInput={this.change}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filtered} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
