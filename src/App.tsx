import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
  filteredMovies: Movie[],
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    query: '',
    filteredMovies: [...moviesFromServer],
  };

  changeInput = (someText: string) => {
    this.setState({ query: someText });

    this.getFilteredMovies();
  };

  getFilteredMovies = () => {
    const { query } = this.state;

    this.setState({
      filteredMovies: moviesFromServer.filter(movie => movie.title.toLowerCase()
        .includes(query.toLowerCase())
        || movie.description.toLowerCase().includes(query.toLowerCase())),

    });
  };

  render() {
    const { query, filteredMovies } = this.state;

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
