import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value.toLowerCase(),
    });
  };

  visibleMovies = () => {
    return (
      moviesFromServer.filter(
        movie => movie.title.toLowerCase().includes(this.state.query)
        || movie.description.toLowerCase().includes(this.state.query),
      ));
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
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    value={this.state.query}
                    onChange={this.handleSearch}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={this.visibleMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
