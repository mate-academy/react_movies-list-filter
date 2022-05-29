import React from 'react';
import './App.scss';
import { Page } from './components/Page/Page';
import { Movies } from './components/Movies/Movies';

export const App: React.FC = () => {
  return (
    <Page>
      <Movies />
    </Page>
  );
};
