import React, { PureComponent } from 'react';
import { typesForMoviesList } from '../../types';
import { MoviesList } from '../MoviesList';

export class FilteredList extends PureComponent {
  state = {
    query: '',
  };

  filterByTwoParams = (
    array,
    query,
    param1,
    param2,
  ) => (
    array.filter(({ [param1]: parameter1, [param2]: parameter2 }) => {
      const param1LowerCase = parameter1.toLowerCase();
      const param2LowerCase = parameter2.toLowerCase();

      return (
        param1LowerCase.includes(query) || param2LowerCase.includes(query)
      );
    })
  )

  render() {
    const queryLowerCase = this.state.query.toLowerCase();
    const filteredList = this.filterByTwoParams(
      [...this.props.list],
      queryLowerCase,
      'title',
      'description',
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
                value={this.state.query}
                onChange={(event) => {
                  this.setState({ query: event.target.value });
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredList} />
      </>
    );
  }
}

FilteredList.propTypes = {
  list: typesForMoviesList,
};

FilteredList.defaultProps = {
  list: [],
};
