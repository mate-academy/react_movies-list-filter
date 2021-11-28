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

  render() {
    const { query } = this.state;
    const visibleMovies = (query)
      ? moviesFromServer.filter(movie => {
        const lowerCaseTitle = movie.title.toLowerCase();
        const lowerCaseDescription = movie.description.toLowerCase();

        return lowerCaseTitle.includes(query) || lowerCaseDescription.includes(query);
      })
      : [...moviesFromServer];

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
                    defaultValue={query}
                    onChange={(e) => this.setState({
                      query: e.target.value.toLocaleLowerCase().trimLeft(),
                    })}
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
