import React from 'react';
import PropTypes from 'prop-types';

export class InputSearch extends React.PureComponent {
  render() {
    const { value, onChange } = this.props;

    return (
      <input
        type="text"
        id="search-query"
        value={value}
        className="input"
        placeholder="Type search word"
        onChange={onChange}
      />
    );
  }
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
