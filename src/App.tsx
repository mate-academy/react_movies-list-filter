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

  render() {
    const { query } = this.state;
    const visibleMivies = moviesFromServer.filter(movie => {
      const value = query.toLocaleLowerCase();
      const title = movie.title.toLocaleLowerCase();
      const description = movie.description.toLocaleLowerCase();

      return title.includes(value) || description.includes(value);
    });

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
                    name="search"
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    value={this.state.query}
                    onChange={(event) => {
                      this.setState({ query: event.target.value });
                    }}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={visibleMivies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
