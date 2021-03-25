import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: moviesFromServer,
  }

  changeHandler = (event) => {
    this.setState({ query: event.target.value });
    this.filterList();
  }

  filterList = () => {
    this.setState(prevState => ({
      movies: moviesFromServer.filter(
        movie => movie.title.toLowerCase().includes(
          prevState.query.toLowerCase(),
        )
        || movie.description.toLowerCase().includes(
          prevState.query.toLowerCase(),
        ),
      ),
    }));
  }

  render() {
    const {
      movies,
      query,
    } = this.state;

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
                  value={query}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
