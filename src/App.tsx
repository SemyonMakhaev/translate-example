import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import logo from 'src/logo.svg';
import store from 'src/store';

import 'src/App.css';

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;
