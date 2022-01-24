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

  filterMovies = () => {
    return moviesFromServer.filter(movie => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      return title.includes(this.state.query.toLowerCase())
      || description.includes(this.state.query.toLowerCase());
    });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const visibleMovies = this.filterMovies();

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
                    value={this.state.query}
                    onChange={this.handleChange}
                    className="input"
                    placeholder="Type search word"
                  />
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
