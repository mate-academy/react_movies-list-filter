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

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(() => ({
      query: event.target.value,
    }));
  };

  getVisibleMovies = (movies: Movie[]) => {
    return movies.filter(movie => {
      const { title, description } = movie;
      const lowerCaseQuery = this.state.query.toLowerCase();

      return (
        title.toLowerCase().includes(lowerCaseQuery)
        || description.toLowerCase().includes(lowerCaseQuery)
      );
    });
  };

  render() {
    const filteredMovies = this.getVisibleMovies(moviesFromServer);

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
                    value={this.state.query}
                    onChange={this.handleChange}
                    placeholder="Type search word"
                  />
                </div>
              </label>

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
