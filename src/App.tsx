import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value.toLowerCase(),
    });
  };

  includesQuery = (...args: string[]) => {
    return args.some(item => item.toLowerCase().includes(this.state.query));
  };

  render() {
    const visibleMovies = moviesFromServer.filter(
      movie => this.includesQuery(movie.title, movie.description),
    );

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
                    id="{search-query}"
                    className="input"
                    placeholder="Type search word"
                    value={this.state.query}
                    onChange={(event) => this.handleChange(event)}
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
