import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './Main';
import UserProfile from './UserProfile';
import Menu from './Menu'
import Chat from './Chat';
import ChatList from './ChatList';
import FindUsers from './FindUsers'

function App() {
  return (
    <div className="Root">
      <BrowserRouter>
          <Menu />
          <div><Switch>
            <Route path="/profile" component={UserProfile}/>
            <Route path="/chat/:userId" component={Chat}/>
            <Route path="/messages" component={ChatList}/>
            <Route path="/find" component={FindUsers}/>
            <Route exact path="**" component={ChatList}/>
          </Switch></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
