import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchPanel extends Component {
  state = {
    query: '',
  }

  onSearchChange = (event) => {
    const query = event.target.value;

    this.setState({ query });
    this.props.onSearchChange(query);
  }

  render() {
    const { className, placeholder } = this.props;

    return (
      <input
        className={className}
        type="text"
        value={this.state.query}
        onChange={this.onSearchChange}
        placeholder={placeholder}
      />

    );
  }
}

SearchPanel.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchPanel;
