import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface State {
  query: string
}

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  getVisibleMovies = () => {
    const { query } = this.state;

    if (!query) {
     return moviesFromServer;
   }
   
   return moviesFromServer.filter(movie => {
        const { title, description } = movie;
        const lowerCaseQuery = query.toLowerCase();

        return title.toLowerCase().includes(lowerCaseQuery)
          || description.toLowerCase().includes(lowerCaseQuery);
      });
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
                    name="search-query"
                    className="input"
                    placeholder="Type search word"
                    value={this.state.query}
                    onChange={this.handleChange}
                  />
                </div>
              </label>
            </div>
          </div>

          <MoviesList movies={this.getVisibleMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
