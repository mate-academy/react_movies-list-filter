/* eslint-disable jsx-a11y/label-has-associated-control */
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

  formHandler = (event: { target: { value: any; }; }) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  render() {
    const { query } = this.state;
    const visibleMovies = moviesFromServer.filter(movie => (
      movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      || movie.description.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    ));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label
                htmlFor="search-query"
                className="label"
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
                  onChange={this.formHandler}
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
