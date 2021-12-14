import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import movies from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  getVisibleMovies() {
    return (movies.filter(movie => {
      const queryLower = this.state.query.toLowerCase();
      const titleLower = movie.title.toLowerCase();
      const descriptionLower = movie.description.toLowerCase();

      return (
        titleLower.includes(queryLower) || descriptionLower.includes(queryLower)
      );
    }));
  }

  render() {
    const visibleMovie = this.getVisibleMovies();

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <div className="control">
                <label htmlFor="search-query" className="label">
                  Search movie
                  <input
                    type="text"
                    id="search-query"
                    className="input"
                    onChange={this.handleChange}
                    placeholder="Type search word"
                  />
                </label>
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
