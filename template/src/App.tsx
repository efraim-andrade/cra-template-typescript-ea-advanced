import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import '~/config/Reactotron';
import Routes from '~/routes';
import light from '~/theme/light';
import GlobalStyles from '~/theme/global';
import { store, persistor } from '~/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={light}>
          <GlobalStyles />

          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default hot(module)(App);
