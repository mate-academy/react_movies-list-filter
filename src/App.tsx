import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  visibleMovies = () => {
    return moviesFromServer.filter((movie => {
      const query = this.state.query.toLocaleLowerCase();
      const title = movie.title.toLocaleLowerCase();
      const description = movie.description.toLocaleLowerCase();

      return title.includes(query) || description.includes(query);
    }));
  };

  render() {
    const visibleMovies = this.visibleMovies();

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
                <div className="control">
                  <input
                    onChange={this.handleChange}
                    value={this.state.query}
                    type="text"
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
