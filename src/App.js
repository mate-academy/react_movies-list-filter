import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movieList: [...moviesFromServer],
    searchParams: '',
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      searchParams: value,
      movieList: this.filteredMovies(),
    });
  };

  filteredMovies = () => {
    const movieArray = [...moviesFromServer];
    const { searchParams } = this.state;
    const redactedSearchParams = searchParams.toLocaleLowerCase();

    return movieArray.filter(movie => movie
      .description.toLocaleLowerCase().includes(redactedSearchParams)
      || movie
        .title.toLocaleLowerCase().includes(redactedSearchParams));
  };

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
                  value={this.state.searchParams}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.movieList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
