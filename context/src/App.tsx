import React from 'react';

import { TranslateForm } from 'src/components/TranslateForm';
import { TranslateProvider } from 'src/contexts/translate';

import 'src/App.css';

function App() {
  return (
    <TranslateProvider>
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700" />

        <TranslateForm />
      </div>
    </TranslateProvider>
  );
}

export default App;
