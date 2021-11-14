import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface State {
  query: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  getFilteretByQuery = () => {
    const processedQuery = this.state.query.toLowerCase();

    return moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(processedQuery)
      || movie.description.toLowerCase().includes(processedQuery)
    ));
  };

  render() {
    const { query } = this.state;

    const filteredMovies = this.getFilteretByQuery();

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
                    value={query}
                    onChange={this.handleChange}
                    id="search-query"
                    className="input"
                    placeholder="Type search word"
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
