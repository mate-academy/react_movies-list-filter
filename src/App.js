import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function searchingFor(query) {
  return x => x.title.toLowerCase()
    .includes(query.toLowerCase())
      || x.description.toLowerCase()
        .includes(query.toLowerCase());
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch = (event) => {
    this.setState({ query: event.target.value });
  }

  render() {
    const { query } = this.state;
    const filteredMovies = moviesFromServer.filter(searchingFor(query));

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
                  onChange={this.updateSearch}
                  value={query}
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
