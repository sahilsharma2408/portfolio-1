import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';
import AppWithTheme from './AppWithTheme';
import * as serviceWorker from './serviceWorker';

ReactDOM.createRoot(document.getElementById('root')).render(
  // styled component has issues with StrictMode like findDOMNode etc
  // But ReactDOM.createRoot uses StrictMode enabled by default
  <AppWithTheme />,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
