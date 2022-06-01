import React from 'react';
import './App.scss';
import { Page } from './components/Page';
import { Movies } from './components/Movies';

export const App: React.FC = () => {
  return (
    <Page>
      <Movies />
    </Page>
  );
};
