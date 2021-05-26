import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    querry: '',
  };

  inputAdd = (event) => {
    this.setState(
      { querry: event.target.value },
    );
  }

  render() {
    const filteredMovies = moviesFromServer.filter(({ title, description }) => {
      if (title.toLowerCase().includes(this.state.querry)
        || description.toLowerCase().includes(this.state.querry)) {
        return true;
      }

      return false;
    });

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-querry" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  name="serachField"
                  type="text"
                  id="search-querry"
                  className="input"
                  placeholder="Type search word"
                  onKeyPress={this.inputAdd}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
