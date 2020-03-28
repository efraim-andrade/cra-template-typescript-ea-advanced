import React from 'react';
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from '~/routes';
import { store, persistor } from '~/store';
import GlobalStyles from '~/theme/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />

        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default hot(module)(App)
