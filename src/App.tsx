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

  handleChange = (event: React.FormEvent<HTMLInputElement>) => this.setState({
    query: event.currentTarget.value,
  });

  isIncludes = (text: string) => text.toLowerCase().includes(this.state.query.toLowerCase());

  visibleMovies = () => {
    const isTitleFind = (title: string) => this.isIncludes(title);

    const isDescriptionFind = (description: string) => this.isIncludes(description);

    return moviesFromServer.filter((movie) => isTitleFind(movie.title)
      || isDescriptionFind(movie.description));
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
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    name="query"
                    value={this.state.query}
                    onChange={this.handleChange}
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
