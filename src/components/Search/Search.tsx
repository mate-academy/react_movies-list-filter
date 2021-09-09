import React from 'react';
import { MoviesList } from '../MoviesList';

interface Props {
  movies: Movie[];
}

interface State {
  query: string;
  visibleMovies: Movie[];
}

export class Search extends React.Component<Props, State> {
  state: State = {
    query: '',
    visibleMovies: this.props.movies,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  render() {
    const { query, visibleMovies } = this.state;

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
                value={query}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} query={query} />
      </>
    );
  }
}
