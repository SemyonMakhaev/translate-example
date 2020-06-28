import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import { TranslateForm } from 'src/components/TranslateForm';
import createStore from 'src/store';

import 'src/App.css';

function App() {
  return (
    <StoreProvider store={createStore()}>
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700" />

        <TranslateForm />
      </div>
    </StoreProvider>
  );
}

export default App;
