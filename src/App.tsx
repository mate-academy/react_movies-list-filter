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

  handleChange = (event:any) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const moviesCopy = [...moviesFromServer].filter(movie => (
      (movie.description.toLocaleLowerCase().includes(this.state.query.toLocaleLowerCase())
      || movie.title.toLocaleLowerCase().includes(this.state.query.toLocaleLowerCase())
      )));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Search"
                  value={this.state.query}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={moviesCopy} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
