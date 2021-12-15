import { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
};

export class App extends Component<{}, State> {
  state: State = {
    query: '',
  };

  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  getFilteredMovies() {
    const { query } = this.state;

    return (moviesFromServer.filter(movie => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      return title.includes(query.toLowerCase()) || description.includes(query.toLowerCase());
    }));
  }

  render() {
    const filteredMovies = this.getFilteredMovies();

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
                    onChange={this.onChangeHandler}
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
