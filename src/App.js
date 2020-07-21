import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './Main';
import UserProfile from './UserProfile';
import Menu from './Menu'
import Chat from './Chat';
import ChatList from './ChatList';

function App() {
  return (
    <div className="Root">
      <BrowserRouter>
        <div className="Menu"><Menu /></div>
          <div><Switch>
            <Route path="/profile" component={UserProfile}/>
            <Route path="/chat" component={Chat}/>
            <Route path="/messages" component={ChatList}/>
            <Route exact path="**" component={Main}/>
          </Switch></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
