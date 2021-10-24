import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  changedQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  render() {
    let { query } = this.state;
    const movies = moviesFromServer.filter(item => {
      let { title, description } = item;

      query = query.toLocaleLowerCase();
      title = title.toLocaleLowerCase();
      description = description.toLocaleLowerCase();

      return !query || (title.includes(query) || description.includes(query));
    });

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <Search query={query} callback={this.changedQuery} />
            </div>
          </div>
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
