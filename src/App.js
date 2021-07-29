import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends React.Component {
  state = {
    query: '',
  }

  render() {
    const { query } = this.state;
    const filteredMovie = moviesFromServer.filter(movie => (
      movie.description.toLowerCase().includes(query.toLowerCase())
      || movie.title.toLowerCase().includes(query.toLowerCase())
    ));

    return (
      <>
        <input
          className="input"
          type="text"
          placeholder="write title or description of the movie"
          onChange={(event) => {
            this.setState({
              query: event.target.value,
            });
          }}
        />
        <div className="page">
          <div className="page-content">
            <MoviesList movies={filteredMovie} />
          </div>
          <div className="sidebar">
            Sidebar will be here
          </div>
        </div>
      </>
    );
  }
}
