import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => (
    this.setState({
      query: event.target.value,
    })
  );

  render() {
    const lowerCaseQuery = this.state.query.toLowerCase();

    const visibleMovies = moviesFromServer.filter(
      ({ title, description }) => (
        title.toLowerCase().includes(lowerCaseQuery)
        || description.toLowerCase().includes(lowerCaseQuery)
      ),
    );

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
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    value={this.state.query}
                    onChange={this.handleInputChange}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
