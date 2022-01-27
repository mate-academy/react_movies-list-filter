import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
  movies: Movie[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    movies: moviesFromServer,
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  getVisibleMovies = () => {
    const copyMovies = [...this.state.movies];
    const lowerCaseQuery = this.state.query.toLowerCase();

    return copyMovies.filter(movie => (
      movie.title.toLowerCase().includes(lowerCaseQuery)
      || movie.description.toLowerCase().includes(lowerCaseQuery)
    ));
  };

  render() {
    const visibleMovies = this.getVisibleMovies();

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
                    value={this.state.query}
                    onChange={this.handleChange}
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
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
