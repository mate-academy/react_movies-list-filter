import PropTypes from 'prop-types';

export const typesForMoviesList = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
  }),
);
