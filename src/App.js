import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    term: '',
  };

  onLabelChange = (e) => {
    const term = e.target.value;

    this.setState({ term });
  };

  render() {
    const { term } = this.state;
    const visibleItems = moviesFromServer.filter(item => (
      item.title.toLowerCase().indexOf(term.toLowerCase()) > -1));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>
              <form className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={this.onLabelChange}
                  value={this.state.term}
                />
              </form>
            </div>
          </div>

          <MoviesList movies={visibleItems} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
