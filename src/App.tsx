import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state = {
    query: '',
  };

  changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  render() {
    const query = this.state.query.toLocaleLowerCase();

    const visibleMovies = moviesFromServer.filter(({ title, description }) => {
      const lowTitle = title.toLowerCase();
      const lowDescr = description.toLocaleLowerCase();

      return lowTitle.includes(query) || lowDescr.includes(query);
    });

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label className="label" htmlFor="search-query">
                Search movie
                <div className="control">
                  <input
                    type="text"
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                    value={this.state.query}
                    onChange={this.changeHandler}
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
