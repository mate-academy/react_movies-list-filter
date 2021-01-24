import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <form>
              <div className="form__field">
                <label htmlFor="search-query" className="label">
                  Search movie
                </label>

                <div className="control">
                  <input
                    type="text"
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    name="movie"
                    value={this.state.query}
                    onChange={(event) => {
                      this.setState({
                        query: event.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </form>
          </div>

          <MoviesList movies={moviesFromServer} search={this.state.query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
