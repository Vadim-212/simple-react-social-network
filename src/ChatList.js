import React from 'react'
import User from './User'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUsers } from './model/actions'


class ChatList extends React.Component {
    constructor(props) {
        super(props)
        this.setState({ users: [] })
    }
    
    componentDidMount() {
        this.props.loadUsers()
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({ users: nextProps.users })
    // }

    render() {
        return(
            <div className=".ChatList">
                <ul>
                    <li>
                        <Link to="/chat">
                            <User user={{name: "User0"}}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/chat">
                            <User user={{name: "User0"}}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/chat">
                            <User user={{name: "User0"}}/>
                        </Link>
                    </li>
                    { this.props.users.map((val, i) => {
                        return <li key={i}>
                            <Link to="/chat"><User user={val}/></Link>
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
        }
    }
}

const ChatListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatList)

export default ChatListContainer