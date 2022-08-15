import React, { useState, ChangeEvent } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handlerSearcValue = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  let movies = moviesFromServer;

  if (query) {
    const queryLoverCase = query.toLowerCase();

    movies = movies.filter(movie => (
      movie.title.toLowerCase().includes(queryLoverCase)
    || movie.description.toLowerCase().includes(queryLoverCase)
    ));
  }

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
                value={query}
                onChange={(event) => (handlerSearcValue(event))}
              />
            </div>
          </div>
        </div>

        <div className="movies">
          {movies.map(movie => (
            <div className="card" key={movie.imdbId}>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={movie.imgUrl}
                    alt="Film logo"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="images/imdb-logo.jpeg"
                        alt="imdb"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-8">{movie.title}</p>
                  </div>
                </div>

                <div className="content">
                  {movie.description}
                  <br />
                  <a href={movie.imdbUrl}>IMDB</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
