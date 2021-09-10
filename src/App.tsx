import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  moviesList: Movie[],
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    moviesList: moviesFromServer,
    query: '',
  };

  filteredList = (movie: Movie) => {
    const lowerTitle = movie.title.toLowerCase();
    const lowerDescription = movie.description.toLowerCase();
    const lowerQuery = this.state.query.toLowerCase();

    return (
      (lowerTitle.includes(lowerQuery) || lowerDescription.includes(lowerQuery))
    );
  };

  render() {
    const visibleList = [...this.state.moviesList]
      .filter(movie => this.filteredList(movie));

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

          <MoviesList movies={visibleList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
