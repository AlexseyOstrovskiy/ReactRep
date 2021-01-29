import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsComtainer from './components/Dialogs/DialogsComtainer';
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

          {/* <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/setting' component={Setting} /> */}


          {/* <Route path='/profile' component={Profile} /> */}
          <Route path='/profile' render=
            {() => <Profile
             store={props.store}
            />} />
          <Route path='/dialogs' render=
            {() => <DialogsComtainer
              store={props.store}
              />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
