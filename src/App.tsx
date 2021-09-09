import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state = {
    query: '',
  };

  searchChange = (event: React.ChangeEvent<HTMLInputElement>) => (
    this.setState({ query: event.target.value })
  );

  getFilteredMove = () => {
    const { query } = this.state;

    const filteredMove = [...moviesFromServer].filter((movie) => (
      (movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    || movie.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    ));

    return filteredMove;
  };

  render() {
    const filteredMove = this.getFilteredMove();

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
                  onChange={this.searchChange}
                />
              </div>
            </div>
          </div>
          <MoviesList movies={filteredMove} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
