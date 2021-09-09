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

  searchMovie = () => {
    const searchMovie = moviesFromServer
      .filter(({ title, description }) => (
        title.toLowerCase().includes(this.state.query.toLowerCase())
        || description.toLowerCase().includes(this.state.query.toLowerCase())
      ));

    return searchMovie;
  };

  render() {
    const searchMovie: Movie[] = this.searchMovie();

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
                  value={this.state.query}
                  onChange={(event) => {
                    this.setState({ query: event.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          <div className="show-search">
            {!searchMovie.length && 'Search returned no results'}
            <MoviesList movies={searchMovie} />
          </div>
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
