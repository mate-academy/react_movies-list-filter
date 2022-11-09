import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string
};

export class App extends React.Component<{}, State> {
  state = {
    query: '',
  };

  render() {
    const visibleMovies = moviesFromServer
      .filter(movie => {
        const movieTitleCheck = movie.title.toLowerCase()
          .includes(this.state.query.toLowerCase());
        const movieDescriptionCheck = movie.description.toLowerCase()
          .includes(this.state.query.toLowerCase());

        return movieTitleCheck || movieDescriptionCheck;
      });

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label
                htmlFor="search-query"
                className="label"
                aria-label="Search movie"
              >
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
                    this.setState({
                      query: event.target.value,
                    });
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
