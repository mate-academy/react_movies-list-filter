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

  changeQuery = (event: { target: { value: string; }; }) => this.setState({
    query: event.target.value,
  });

  getFilteredMovies = () => {
    const { query } = this.state;
    const queryLow = query.toLocaleLowerCase();

    return [...moviesFromServer].filter(movie => (
      movie.title.toLowerCase().includes(queryLow)
      || movie.description.toLowerCase().includes(queryLow)
    ));
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
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={query}
                  onChange={this.changeQuery}
                />
              </div>
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
