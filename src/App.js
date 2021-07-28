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
    });
  };

  filteredMovies = () => {
    let { movieList } = this.state;
    const { searchParams } = this.state;
    const redactedSearchParams = searchParams.toLocaleLowerCase();

    movieList = movieList.filter(movie => movie
      .description.toLocaleLowerCase().includes(redactedSearchParams)
      || movie
        .title.toLocaleLowerCase().includes(redactedSearchParams));

    return movieList;
  };

  render() {
    let { movieList } = this.state;
    const { searchParams } = this.state;

    movieList = this.filteredMovies();

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
                  value={searchParams}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={movieList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
