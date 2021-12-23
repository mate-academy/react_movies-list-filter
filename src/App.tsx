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

  render() {
    const { query } = this.state;
    const visibleMovie = [...moviesFromServer].filter(movie => (
      movie.title.toLowerCase().includes(query.toLowerCase())
        || movie.description.toLowerCase()
          .includes(query.toLowerCase())
    ));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <div className="control">
                <label htmlFor="searchQuery" className="label">
                  Search movie
                  <input
                    type="text"
                    id="searchQuery"
                    className="input"
                    placeholder="Type search word"
                    onChange={event => this.setState({ query: event.target.value.toLowerCase() })}
                  />
                </label>
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
