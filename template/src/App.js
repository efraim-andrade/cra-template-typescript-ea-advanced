import React from 'react';

import '~/config/Reactotron';
import GlobalStyles from '~/theme/global'

import Routes from '~/routes';

export default function App() {
  return (
    <>
      <GlobalStyles />

      <Routes />
    </>
  );
}
