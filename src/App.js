import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movie: moviesFromServer,
    term: '',
  }

  search = (movieArr, term) => {
    if (term.length === 0) {
      return movieArr;
    }

    return movieArr.filter(item => (
      item.title.toLowerCase().includes(term.toLowerCase())
      || item.description.toLowerCase().includes(term.toLowerCase())
    ));
  }

  onSearch = (e) => {
    this.setState({
      term: e.target.value,
    });
  }

  render() {
    const { movie, term } = this.state;
    const visibleMovie = this.search(movie, term);

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
                  onChange={this.onSearch}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
