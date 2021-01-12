import React from 'react';
import './index.css';
import store from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';


let rerenderEntireTree = (state) =>{
ReactDOM.render(
  <React.StrictMode>
    <App 
    state={state} 
    addPost={store.addPost.bind(store)} 
    updateNewPostText = {store.updateNewPostText.bind(store)}
    addNewMessage = {store.addNewMessage.bind(store)}
    updateNewMessageText ={ store.updateNewMessageText.bind(store)}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);




