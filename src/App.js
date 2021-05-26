import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    querry: '',
  };

  inputAdd = (event) => {
    if (event.key === 'Enter') {
      this.setState(
        { querry: event.target.value },
      );
    }
  }

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
                  name="serachField"
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onKeyPress={this.inputAdd}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={moviesFromServer} querry={this.state.querry} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
