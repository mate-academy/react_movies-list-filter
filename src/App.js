import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    searchText: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { searchText } = this.state;
    const filmList = (searchText === '')
      ? moviesFromServer
      : moviesFromServer.filter((movie) => {
        if (movie.title.toUpperCase().includes(searchText.toUpperCase())
        || movie.description.toUpperCase().includes(searchText.toUpperCase())) {
          return true;
        }

        return false;
      });

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
                  onChange={this.handleChange}
                  name="searchText"
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filmList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
