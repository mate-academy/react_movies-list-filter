import PropTypes from 'prop-types';

export const MoviesShape = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  imdbUrl: PropTypes.string,
  imdbId: PropTypes.string,
});
