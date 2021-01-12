import React from 'react';
import './index.css';
import state, { subscribe } from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost,updateNewPostText, addNewMessage,  updateNewMessageText} from './redux/state';

let rerenderEntireTree = (state) =>{
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

rerenderEntireTree(state);
subscribe(rerenderEntireTree);




