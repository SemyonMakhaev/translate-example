import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import store from 'src/store';

import 'src/App.css';

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700" />
      </div>
    </StoreProvider>
  );
}

export default App;
