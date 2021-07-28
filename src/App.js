import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  searchMovie = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  filterMovies = () => moviesFromServer.filter(
    movie => movie.description.toLocaleLowerCase().includes(
      this.state.query.toLocaleLowerCase(),
    )
     || movie.title.toLocaleLowerCase().includes(
       this.state.query.toLocaleLowerCase(),
     ),
  )

  render() {
    const filteredMovies = this.filterMovies();

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
                  onChange={this.searchMovie}
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
