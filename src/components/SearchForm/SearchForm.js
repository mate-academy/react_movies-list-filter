import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { typesForMoviesList } from '../../types';

export class SearchForm extends PureComponent {
  state = {
    query: '',
  };

  componentDidUpdate() {
    const { list, filterList } = this.props;
    const queryLowerCase = this.state.query.toLowerCase();
    const filteredList = this.filterByTwoParams(
      [...list],
      queryLowerCase,
      'title',
      'description',
    );

    filterList(filteredList);
  }

  filterByTwoParams = (
    array,
    query,
    firstSortingParam,
    secondSortingParam,
  ) => (
    array.filter(({
      [firstSortingParam]: firstParam,
      [secondSortingParam]: secondParam,
    }) => {
      const firstParamLowerCase = firstParam.toLowerCase();
      const secondParamLowerCase = secondParam.toLowerCase();

      return (firstParamLowerCase.includes(query)
      || secondParamLowerCase.includes(query));
    })
  )

  onFilter = event => this.setState({ query: event.target.value });

  render() {
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
                onChange={this.onFilter}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

SearchForm.propTypes = {
  list: typesForMoviesList,
  filterList: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  list: [],
};
