import React from 'react'
import User from '../components/User'
import { Link } from 'react-router-dom'
import '../styles/ChatList.css'


class ChatList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { users: [], messages: [] }
    }

    render() {
        return(
            <div className="ChatList">
                <ul id="chatlist-list">
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

export default ChatList
