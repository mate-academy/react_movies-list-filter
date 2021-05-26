import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  changeHandler = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const visibleMovies = moviesFromServer.filter(
      mv => (
        mv.title.toLowerCase().includes(this.state.query.toLowerCase())
        || mv.description.toLowerCase().includes(this.state.query.toLowerCase())
      ),
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
                  value={this.state.query}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">Sidebar goes here</div>
      </div>
    );
  }
}
