import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface State {
  search: string,
}

export class App extends React.Component<{}, State> {
  state: State = {
    search: '',
  };

  controlChanges = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      search: event.currentTarget.value,
    });
  };

  visibleMovies = () => {
    const isTitleIncludes = (movieTitle: string) => movieTitle
      .toLowerCase()
      .includes(this.state.search.toLowerCase());

    const isBodyIncludes = (movieBody: string) => movieBody
      .toLowerCase()
      .includes(this.state.search.toLowerCase());

    return moviesFromServer.filter((movie) => isTitleIncludes(movie.title)
    || isBodyIncludes(movie.description));
  };

  render() {
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
                    className="input"
                    placeholder="Type search word"
                    id="search-query"
                    name="search"
                    value={this.state.search}
                    onChange={this.controlChanges}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={this.visibleMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
