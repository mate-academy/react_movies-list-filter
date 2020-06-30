import PropTypes from 'prop-types';
import { ShapeMovieCard } from './ShapeMovieCard';

export const ShapePageContent = {
  onChange: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape(ShapeMovieCard)).isRequired,
};
