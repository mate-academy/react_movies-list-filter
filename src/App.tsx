import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type Props = {};

type State = {
  allMovies: Movie[];
  query: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    allMovies: moviesFromServer,
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({ query: value });
  };

  filtredMoves = () => {
    const { allMovies, query } = this.state;
    const lowerCaseQuery = query.toLowerCase();

    return allMovies.filter(
      movie => movie.title.toLowerCase().includes(lowerCaseQuery)
        || movie.description.toLowerCase().includes(lowerCaseQuery),
    );
  };

  render() {
    const { query } = this.state;
    const visibleMovies = this.filtredMoves();

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
                    value={query}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
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
