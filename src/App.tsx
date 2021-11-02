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

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    this.setState({
      query: target.value.toLowerCase(),
    });
  };

  filterMovies = () => moviesFromServer
    .filter(movie => (movie.title + movie.description)
      .toLowerCase().includes(this.state.query.toLowerCase()));

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label
                htmlFor="search-query"
                className="label"
              >
                <div className="control">
                  <input
                    type="text"
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    value={this.state.query}
                    onChange={this.handleChange}
                  />
                </div>
                Search movie
              </label>

            </div>
          </div>

          <MoviesList movies={this.filterMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
