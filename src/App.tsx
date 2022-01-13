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

  handleChange = (event: { target: { value: string; }; }) => {
    const { value } = event.target;

    this.setState({ query: value });
  };

  filteredMovies = () => {
    return (
      moviesFromServer.filter((movie) => {
        const title = movie.title.toLowerCase();
        const description = movie.description.toLowerCase();
        const query = this.state.query.toLowerCase();

        return (
          title.includes(query) || description.includes(query)
        );
      })
    );
  };

  render() {
    const { query } = this.state;

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
                    value={query}
                    onChange={this.handleChange}
                    placeholder="Type search word"
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={this.filteredMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
