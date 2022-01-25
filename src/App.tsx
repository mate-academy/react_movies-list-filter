import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query:string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  render() {
    const visibleMovies = [...moviesFromServer].filter(movie => (
      movie.title.toLocaleLowerCase().includes(this.state.query.toLocaleLowerCase())
      || movie.description.toLocaleLowerCase().includes(this.state.query.toLocaleLowerCase())
    ));

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
                    value={this.state.query}
                    onChange={this.handleChange}
                    id="search-query"
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
