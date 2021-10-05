
import React from 'react';
import Routes from './src/router';

import UserContextProvider from './src/contexts/UserContext';

export default () => {
  return (
    <>
      <UserContextProvider>
        <Routes/>
      </UserContextProvider>
    </>
  );

};
