import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  searchQuery: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    searchQuery: '',
  };

  render() {
    const findMovies:Movie[] | [] = moviesFromServer.filter((movie) => {
      const prepedDescription: string = movie.description.toLowerCase();
      const prepedTitle: string = movie.title.toLowerCase();
      const prepedSearchQuery: string = this.state.searchQuery.toLowerCase();

      return prepedTitle.includes(prepedSearchQuery)
        || prepedDescription.includes(prepedSearchQuery);
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
                    onChange={(event) => this.setState({
                      searchQuery: event.currentTarget.value,
                    })}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={findMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
