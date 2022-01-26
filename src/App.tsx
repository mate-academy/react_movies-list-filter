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

  filterCallback = (movie: Movie) => {
    const { title, description } = movie;
    const lowerCaseQuery = this.state.query.toLowerCase();

    return (
      title.toLowerCase().includes(lowerCaseQuery)
      || description.toLowerCase().includes(lowerCaseQuery)
    );
  };

  handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const visibleMovies = moviesFromServer.filter(this.filterCallback);

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <div className="control">
                <label htmlFor="search-query" className="label">
                  Search Movie
                  <input
                    type="text"
                    id="search-query"
                    value={this.state.query}
                    onChange={this.handleChangeQuery}
                    className="input"
                    placeholder="Type search word"
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
