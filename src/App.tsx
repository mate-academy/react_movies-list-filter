import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  // const [movies, setMovies] = useState(moviesFromServer);
  const [input, setInput] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const handleChange = (event: any) => {
    // setInput(event.target.value.trim());
    const { value } = event.target;

    setInput(value);

    //   setInput(type === 'checkbox'
    //   ? checked
    //   : value,
    // );

    console.log(input);
  };

  // const handleSubmit = (event) => {
  //   setInput(event.target.value.trim());
  //   console.log(input);
  // };

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
                value={input}
                // defaultValue={input}
                // onChange={(event) => {
                // setInput(event.target.value.trim());
                // console.log(event.target.value);
                // console.log(input);
                // }}
                onChange={handleChange}
              />

              {/* <form onSubmit={(event) => {
                event.preventDefault();
                console.log(password, username)
              }}
              >
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  // onChange={(event) => {
                  //   setUsername(event.target.value);
                  // }}
                  onChange={handleSubmit}
                />
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  // onChange={(event) => {
                  //   setPassword(event.target.value);
                  // }}
                  onChange={handleSubmit}

                />
                <button
                  type="submit"
                >
                  click here
                </button>
              </form> */}
            </div>
          </div>
        </div>

        <MoviesList movies={moviesFromServer} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
