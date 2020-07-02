import PropTypes from 'prop-types';
import { ShapeMovieCard } from './ShapeMovieCard';

export const ShapePageContent = {
  movies: PropTypes.arrayOf(PropTypes.shape(ShapeMovieCard)).isRequired,
};
