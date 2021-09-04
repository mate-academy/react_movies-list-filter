import React from 'react';
import './App.scss';
import { FilterMovie } from './components/FilterMovie/FilterMovie';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
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
                  onChange={(event) => {
                    this.setState({
                      query: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <FilterMovie moviesFromServer={moviesFromServer} query={this.state.query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
