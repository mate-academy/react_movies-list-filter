import {
  useState,
  FC,
  useEffect,
  ChangeEvent,
} from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getVisibleMovies = (movieList: Movie[], query: string): Movie[] => {
  return movieList.filter(movie => {
    const { title, description } = movie;

    const isTitleIncludeQuery = title
      .toLocaleLowerCase()
      .includes(query);
    const isDescriptionIncludeQuery = description
      .toLocaleLowerCase()
      .includes(query);

    return isTitleIncludeQuery || isDescriptionIncludeQuery;
  });
};

export const App: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setVisibleMovies(getVisibleMovies(moviesFromServer, searchQuery));
  }, [searchQuery]);

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={searchQuery}
                onChange={handleSearchQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
