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

  filteredMovies = () => {
    const movies = moviesFromServer;
    const { query } = this.state;

    return movies.filter(movie => movie.title.toLowerCase().includes(query.toLocaleLowerCase())
      || movie.description.toLowerCase().includes(query.toLocaleLowerCase()));
  };

  render() {
    const visibleMovies = this.filteredMovies();

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
                    placeholder="Type search word"
                    value={this.state.query}
                    onChange={(event) => {
                      this.setState({
                        query: event.target.value,
                      });
                    }}
                  />
                  {this.state.query}
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
