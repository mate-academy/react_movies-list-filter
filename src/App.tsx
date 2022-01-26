import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
};

const getMovies = (movies: Movie[], query: string) => {
  return [...movies].filter(({ title, description }) => {
    const lowerCaseQuery = query.toLowerCase();

    return title.toLowerCase().includes(lowerCaseQuery)
      || description.toLowerCase().includes(lowerCaseQuery);
  });
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  render() {
    const visibleMovies = getMovies(moviesFromServer, this.state.query);

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
                    onChange={(event) => {
                      this.setState({
                        query: event.target.value,
                      });
                    }}
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
