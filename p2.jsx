import React from 'react';
import ReactDOM from 'react-dom';

import States from './components/states/States';
import Header from './components/header/header';

// Wrap States with Header so Header shows at the top
ReactDOM.render(
  <div>
    <Header />
    <States />
  </div>,
  document.getElementById('reactapp'),
);
