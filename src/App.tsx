import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

type Event = {
  target: {
    value: string;
  }
};

export class App extends React.Component<{}, State, Event> {
  state: State = {
    query: '',
  };

  handleChange = (event: Event) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const visibleMovies = moviesFromServer.filter(({ title, description }) => (
      title.toLowerCase().includes(this.state.query.toLowerCase())
      || description.toLowerCase().includes(this.state.query.toLowerCase())
    ));

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
                  placeholder="Type search word"
                  value={this.state.query}
                  onChange={this.handleChange}
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
