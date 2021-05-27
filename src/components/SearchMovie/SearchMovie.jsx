import React from 'react';
import { MoviesList } from '../MoviesList';
import moviesFromServer from '../../api/movies.json';

export class SearchMovie extends React.Component {
  state = {
    query: '',
  }

  queryChange = (event) => {
    this.setState({ query: event.target.value.toLowerCase() });
  }

  render() {
    const { query } = this.state;
    const visibleMovies = moviesFromServer.filter(
      ({ title, description }) => title.toLowerCase().includes(query)
      || description.toLowerCase().includes(query),
    );

    return (
      <>
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={this.state.search}
                onChange={this.queryChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </>
    );
  }
}
