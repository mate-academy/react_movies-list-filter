import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  [searchQuery:string] : string
};

export class App extends React.Component<{}, State> {
  state: State = {
    searchQuery: '',
  };

  handleChange = (event: any) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
                <div className="control">
                  <input
                    type="text"
                    value={this.state.searchQuery}
                    name="searchQuery"
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    onChange={this.handleChange}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={moviesFromServer} query={this.state.searchQuery} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
