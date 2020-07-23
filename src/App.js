import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserProfile from './UserProfile';
import Menu from './Menu'
import Chat from './Chat';
import ChatList from './ChatList';
import FindUsers from './FindUsers'
import { loginSuccess, fetchUsers, fetchMessages } from './model/actions';
import { connect } from 'react-redux';


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

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (userId) => {
      dispatch(loginSuccess(userId))
    },
    loadUsers: () => {
      dispatch(fetchUsers())
    },
    loadMessages: () => {
      dispatch(fetchMessages())
    }
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer