import React from 'react'
import User from './User'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUsers, fetchMessages, getMessagesByUserId, loginSuccess } from './model/actions'
import './ChatList.css'


class ChatList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { users: [], messages: [] }
    }
    
    componentDidMount() {
        this.props.loginUser(0)
        this.props.loadUsers()
        this.props.loadMessages()
        this.props.loadMessagesByUserId()
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ users: nextProps.users })
    // }

    render() {
        return(
            <div className="ChatList">
                <ul>
                    {/* { this.props.users.map((val, i) => {
                        return <li key={i}>
                            <Link to="/chat"><User user={val}/></Link>
                        </li>
                    }) } */}
                    { this.props.users.map((val, i) => {
                        let newArr = this.props.messages.filter((msg) => (msg.fromUser == val.id && msg.toUser == this.props.logged) || (msg.toUser == val.id && msg.fromUser == this.props.logged))
                        if(newArr.length == 0){
                            return
                        }
                        return <li key={i}>
                            <Link to={`/chat/${val.id}`}>
                                <User user={val}/>
                                <div>
                                    { (newArr[newArr.length - 1].fromUser == val.id) ? val.name : "Вы" }
                                : { (newArr[newArr.length - 1].text.length > 35) ? newArr[newArr.length - 1].text.substr(0,35) + "..." : newArr[newArr.length - 1].text}
                                </div>
                            </Link>
                        </li>
                    }) }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        loadUsers: () => {
            dispatch(fetchUsers())
        },
        loadMessages: () => {
            dispatch(fetchMessages())
        },
        loadMessagesByUserId: (userId) => {
            dispatch(getMessagesByUserId(userId))
        },
        loginUser: (userId) => {
            dispatch(loginSuccess(userId))
        }
    }
}

const ChatListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatList)

export default ChatListContainer