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

  handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  getVisibleMovies = (movies: Movie[]) => {
    const { query } = this.state;

    return movies.filter((value) => {
      const title = value.title.toLowerCase();
      const description = value.description.toLowerCase();
      const lowerCaseQuery = query.toLowerCase();

      if (title.includes(lowerCaseQuery) || description.includes(lowerCaseQuery)) {
        return true;
      }

      return false;
    });
  };

  render() {
    const visibleMovies = this.getVisibleMovies(moviesFromServer);

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
                    onChange={this.handlerInput}
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
