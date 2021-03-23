import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: moviesFromServer,
  };

  filterMoviesBySearchWord = (event) => {
    const { value } = event.target;
    const prepearedValue = value.toLowerCase();

    this.setState({
      query: value,
      movies: [...moviesFromServer].filter(
        movie => movie.title.toLowerCase().includes(prepearedValue)
        || movie.description.toLowerCase().includes(prepearedValue),
      ),
    });
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
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Search &#128270;"
                  value={this.state.query}
                  onChange={this.filterMoviesBySearchWord}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
