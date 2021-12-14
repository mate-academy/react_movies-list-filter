import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  getMoviesList = (searchQuery: string) => (
    moviesFromServer.filter(movie => {
      return movie.title.toLocaleLowerCase().includes(searchQuery)
        || movie.description.toLocaleLowerCase().includes(searchQuery);
    })
  );

  handleSearchQuery = (value:string) => {
    this.setState({ query: value });
  };

  render() {
    const searchQuery = this.state.query.toLocaleLowerCase();
    const visibleMovies = this.getMoviesList(searchQuery);

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
                    value={this.state.query}
                    onChange={event => this.handleSearchQuery(event.target.value)}
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
