import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  onChange = (e) => {
    this.props.onFilterChange(e.target.value);
  }

  render() {
    return (
      <div className="control">
        <input
          onChange={this.onChange}
          name="searchText"
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
        />
      </div>
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
