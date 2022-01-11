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

  filterMovies = () => {
    return (
      moviesFromServer.filter((movie) => {
        const titleToLC = movie.title.toLowerCase();
        const descriptionToLC = movie.description.toLowerCase();
        const queryToLC = this.state.query.toLowerCase();

        return (
          titleToLC.includes(queryToLC) || descriptionToLC.includes(queryToLC)
        );
      })
    );
  };

  render() {
    const { query } = this.state;
    const visibleMovies = this.filterMovies();

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

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
