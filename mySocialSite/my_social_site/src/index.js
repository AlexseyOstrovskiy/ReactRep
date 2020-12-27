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

let messages = [
  { id: 1, message: 'Hi, bro' },
  { id: 2, message: 'Bro, how are yuo?' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Brooo!' },
  { id: 5, message: 'Good idea!' },
]

  let posts = [
    { id: 1, post: 'Hi, how are you?' , like: 10},
    { id: 2, post: 'It\'is my first post!!!', like: 15}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

