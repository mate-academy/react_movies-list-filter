import PropTypes from 'prop-types';

export const ShapeMovieCard = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
};

export const ShapeMovieCardDefault = {
  description: '',
};
