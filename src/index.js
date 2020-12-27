import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom'; // react - 어떤 플랫폼이라도 모두 사용될 수 있음. 
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
