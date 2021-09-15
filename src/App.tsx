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
    query: '',
    movies: [...moviesFromServer],
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  getMovies = () => {
    const { query } = this.state;

    const lowQuery = query.toLowerCase();

    this.setState({
      movies: moviesFromServer.filter(movie => (
        movie.title.toLowerCase().includes(lowQuery)
        || movie.description.toLowerCase().includes(lowQuery)
      )),
    });
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field" onChange={this.getMovies}>
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
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
