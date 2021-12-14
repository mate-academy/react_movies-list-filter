import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type Movie = {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
};

type State = {
  query: string,
  filteredList: Movie[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
    filteredList: moviesFromServer,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value.toLowerCase() });
    this.searchByQuery();
  };

  searchByQuery = () => {
    this.setState((state) => ({
      filteredList: moviesFromServer.filter((movie) => {
        return movie.title.toLowerCase().includes(state.query)
        || movie.description.toLowerCase().includes(state.query);
      }),
    }));
  };

  render() {
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
                    // value={this.state.query}
                    onChange={this.handleChange}
                  />
                </div>
              </label>

            </div>
          </div>

          <MoviesList movies={this.state.filteredList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
