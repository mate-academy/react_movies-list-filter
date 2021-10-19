import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  search: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    search: '',
  };

  render() {
    const { search } = this.state;
    const filteredMovie = moviesFromServer
      .filter(movie => movie.title.toLocaleLowerCase().includes(search.toLowerCase())
        || movie.description.toLocaleLowerCase().includes(search.toLowerCase()));

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
                    value={this.state.search}
                    onChange={(event) => this.setState({ search: event.target.value })}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={filteredMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
