import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  inputChangeValue = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  filterByContent = () => (
    moviesFromServer.filter((film) => {
      const { title, description } = film;
      const { query } = this.state;

      return title.toLowerCase().includes(query.toLowerCase())
      || description.toLowerCase().includes(query.toLowerCase());
    })
  )

  render() {
    const { query } = this.state;

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
                  value={query}
                  onChange={this.inputChangeValue}
                  placeholder="Type search word"
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.filterByContent()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
