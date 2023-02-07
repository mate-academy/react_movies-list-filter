import { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export function filter(array: Movie[], query:string) {
  if (query === '') {
    return moviesFromServer;
  }

  const valueToFind = query.toLowerCase().trim();

  return [...array].filter(movie => {
    const title = movie.title
      .toLowerCase()
      .includes(valueToFind);
    const description = movie.description
      .toLowerCase()
      .includes(valueToFind);

    return title || description;
  });
}

export class App extends Component<{}, State> {
  state = { query: '' };

  render() {
    const { query } = this.state;

    const visibleMovies = filter(moviesFromServer, query);

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={query}
                  onChange={(e) => {
                    this.setState({ query: e.target.value });
                  }}
                />
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
