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

  filtredMovies = () => moviesFromServer.filter(
    movie => movie.description.toLowerCase().includes(this.state.query.toLowerCase())
    || movie.title.toLowerCase().includes(this.state.query.toLowerCase()),
  );

  changeQuery = (event: { target: { value: string; }; }) => (
    this.setState({
      query: event.target.value,
    })
  );

  render() {
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
                  onChange={this.changeQuery}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.filtredMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
