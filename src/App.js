import React from 'react';
import moviesFromServer from './api/movies.json';
import { SideBar } from './components/SideBar/SideBar';
import { PageContent } from './components/PageContent/PageContent';
import './App.scss';

export const App = () => (
  <div className="page">
    <PageContent
      movies={moviesFromServer}
    />
    <SideBar />
  </div>
);
