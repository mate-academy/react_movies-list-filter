/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export class TextStyle extends React.Component {
textHighlight = (text, query) => {
  const newText = text.split(' ');
  const result = newText.map(word => ((word.toLowerCase().includes(query) === true)
    ? (
      `<span class="highlight">
        ${word}
      </span>`
    ) : word)).join(' ');

  return { __html: result };
}

render() {
  const { data, isHighlighted, searchTerm } = this.props;
  let render;

  if (isHighlighted) {
    render = (
      <p
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={this.textHighlight(data, searchTerm)}
      />
    );
  } else {
    render = <p>{data}</p>;
  }

  return (
    <>
      {render}
    </>
  );
}
}
TextStyle.defaultProps = {
  data: '',
};
TextStyle.propTypes = {
  data: PropTypes.string,
  searchTerm: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
};
