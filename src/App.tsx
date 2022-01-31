import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    query: '',
  };

  changeInput = (query: string) => {
    this.setState({ query });
  };

  getFilteredMovies = () => {
    const { query } = this.state;
    const queryToLowerCase: string = query.toLowerCase();

    return moviesFromServer.filter(movie => movie.title.toLowerCase().includes(queryToLowerCase)
    || movie.description.toLowerCase().includes(queryToLowerCase));
  };

  render() {
    const { query } = this.state;
    const filteredMovies = this.getFilteredMovies();

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
                    value={query}
                    onChange={event => this.changeInput(event.target.value)}
                  />
                </div>
              </label>
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
