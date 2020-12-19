import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Polya' },
      { id: 3, name: 'Ragnar' },
      { id: 4, name: 'Gertruda' },
      { id: 5, name: 'Zidan' },
  ]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

