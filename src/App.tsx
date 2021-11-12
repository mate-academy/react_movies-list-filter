import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface State {
  movies: Movie[],
  query: string,
}

export class App extends React.Component<{}, State> {
  state: State = {
    movies: moviesFromServer,
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  findMovieByQuery = () => {
    const { query, movies } = this.state;
    const normalizedQuery = query.toLocaleLowerCase();

    return movies.filter((movie:Movie) => {
      return movie.title.toLocaleLowerCase().includes(normalizedQuery)
        || movie.description.toLowerCase().includes(normalizedQuery);
    });
  };

  render() {
    const visibleMovies = this.findMovieByQuery();

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie

                <input
                  value={this.state.query}
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={this.handleChange}
                />
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
