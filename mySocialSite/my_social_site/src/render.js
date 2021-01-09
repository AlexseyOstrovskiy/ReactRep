import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost,updateNewPostText, addNewMessage,  updateNewMessageText} from './redux/state';

export let rerenderEntireTree = (state) =>{
ReactDOM.render(
  <React.StrictMode>
    <App 
    state={state} 
    addPost={addPost} 
    updateNewPostText = {updateNewPostText}
    addNewMessage = {addNewMessage}
    updateNewMessageText ={ updateNewMessageText}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
}






