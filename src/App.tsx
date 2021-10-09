import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBar } from './components/SearchBar';

interface State {
  query: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  filteredMovies = (movies: Movie[], query: string) => {
    return (
      movies.filter(movie => {
        const { title, description } = movie;

        const normalizedQuery = query.toLowerCase();
        const normalizedTitle = title.toLowerCase();
        const normalizedDescription = description.toLowerCase();

        return normalizedTitle.includes(normalizedQuery)
          || normalizedDescription.includes(normalizedQuery);
      })
    );
  };

  render() {
    const { query } = this.state;
    const visibleMovies = this.filteredMovies(moviesFromServer, query);

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar
            query={query}
            handler={this.handleInputChange}
          />

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
