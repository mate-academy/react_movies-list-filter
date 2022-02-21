import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
/*eslint-disable*/


export const App:React.FC = () => {
  const [visibleMovies,setVisible] = useState(moviesFromServer);
  const [query,setQuery] = useState('');

  const filter =(inputLetters:string)=>{
    setVisible([...moviesFromServer].filter(movie=> {
     const { title, description } = movie;

     return title.toLowerCase().includes(inputLetters.toLowerCase())
        || description.toLowerCase().includes(inputLetters.toLowerCase());
  }))
}

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">

              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
              <input
                type="text"
                value={query}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setQuery(event.currentTarget.value);
                  filter(query);
          }}
        />
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
}
