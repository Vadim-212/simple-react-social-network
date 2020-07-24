import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { default as UserProfile } from '../containers/UserProfileContainer';
import Menu from '../components/Menu'
import { default as Chat } from '../containers/ChatContainer';
import { default as ChatList } from '../containers/ChatListContainer';
import { default as FindUsers } from '../containers/FindUsersContainer'


class App extends React.Component {
  componentDidMount() {
    this.props.loginUser(1)
    this.props.loadUsers()
    this.props.loadMessages()
}

  render() {
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

}

export default App
