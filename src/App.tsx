import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  data: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    data: '',
  };

  render() {
    const { data } = this.state;

    const filtredMoveis = moviesFromServer.filter(({ title, description }) => {
      return (
        title.toUpperCase().includes(data.toUpperCase())
        || description.toUpperCase().includes(data.toUpperCase())
      );
    });

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
                    onChange={(event) => this.setState({ data: event.target.value })}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={filtredMoveis} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
