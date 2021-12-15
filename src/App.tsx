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

  handlerCange = (event:
  React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  getVisibilityMovies() {
    return (moviesFromServer.filter(movie => {
      const queryLowerCase = this.state.query.toLowerCase();
      const titleLowerCase = movie.title.toLowerCase();
      const descriptionLowerCase = movie.description.toLowerCase();

      return (
        titleLowerCase.includes(queryLowerCase) || descriptionLowerCase.includes(queryLowerCase)
      );
    }));
  }

  render() {
    const visibleMovie = this.getVisibilityMovies();

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
                    placeholder="Type search word"
                    onChange={this.handlerCange}
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
