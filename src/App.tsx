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

  queryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  getVisibleMovies = () => {
    return moviesFromServer.filter(movie => {
      const queryLowerCase = this.state.query.toLowerCase();
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      return title.includes(queryLowerCase) || description.includes(queryLowerCase);
    });
  };

  render() {
    const visibleMovies = this.getVisibleMovies;

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
                    onChange={this.queryChange}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={visibleMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
