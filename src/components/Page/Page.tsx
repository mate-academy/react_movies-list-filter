import React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Page: React.FC<Props> = ({ children }) => {
  return (
    <div className="page">
      <div className="page-content">
        {children}
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
