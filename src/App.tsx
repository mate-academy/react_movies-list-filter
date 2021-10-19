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

  searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  sortHandler = () => {
    const movies = moviesFromServer;
    const { query } = this.state;

    return (
      movies.filter(item => item.title.toLowerCase()
        .includes(query.toLowerCase())
        || item.description.toLowerCase().includes(query.toLowerCase()))
    );
  };

  render() {
    const sortedMovies = this.sortHandler();

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
                  onChange={this.searchHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={sortedMovies} />
        </div>
        <div className="sidebar">Sidebar goes here</div>
      </div>
    );
  }
}
