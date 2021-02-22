import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsComtainer from './components/Dialogs/DialogsComtainer';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  //  let dialogs = props.dialogs;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render=
            {() => <Profile/>} />
          <Route path='/dialogs' render=
            {() => <DialogsComtainer/>} />
          <Route path='/users' render=
            {() => <UsersContainer/>} />
        
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
