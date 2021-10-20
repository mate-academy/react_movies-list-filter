import React from 'react';
import './App.scss';
import { Search } from './components/Search/Search';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handlerQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  render() {
    const { query } = this.state;
    const filterMovies = moviesFromServer
      .filter(movie => movie.title.toLowerCase().includes(query.toLowerCase())
      || movie.description.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <Search
              query={query}
              handlerQuery={this.handlerQuery}
            />
          </div>

          <MoviesList movies={filterMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
