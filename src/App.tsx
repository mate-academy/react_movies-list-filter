import React from 'react';
import './App.scss';
import { SuggestedMovies } from './components/SuggestedMovies';

export const App: React.FC = () => {
  return (
    <div className="page">
      <SuggestedMovies />

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
