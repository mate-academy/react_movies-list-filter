import React from 'react';
import './App.scss';
// import { FilterMovie } from './components/FilterMovie/FilterMovie';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

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
    this.getFilteredMovies();
  };

  getFilteredMovies = () => {
    const { query } = this.state;
    const queryToLowerCase = query.toLocaleLowerCase();

    return moviesFromServer.filter((movie: Movie) => movie.title.toLocaleLowerCase()
      .includes(queryToLowerCase)
      || movie.description.toLocaleLowerCase()
        .includes(queryToLowerCase));
  };

  render() {
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
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.getFilteredMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
