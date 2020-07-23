import React from 'react'
import Message from './Message'
import './Chat.css'
import { connect } from 'react-redux'
import { sendMessage, getMessagesByUserId, getMessagesInChat } from './model/actions'
import { messages } from './model/reducer'
import User from './User'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            messages: [], 
            inputValue: '' }

        this.onInputChange = this.onInputChange.bind(this)
        this.onInputKeyDown = this.onInputKeyDown.bind(this)
        this.onButtonClickSendMessage = this.onButtonClickSendMessage.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ messages: nextProps.messages })
    }

    componentDidMount() {
        let messagesInChat = []
        this.props.messages.forEach(msg => {
            if((msg.fromUser == this.props.match.params.userId && msg.toUser == this.props.logged) || (msg.toUser == this.props.match.params.userId && msg.fromUser == this.props.logged)) {
                messagesInChat.push(msg)
            }
        })
        this.setState({messages: messagesInChat})
    }

    render() {
        return(
            <div className="Chat">
                <User user={this.props.users[this.props.match.params.userId]}/>
                <div className="messages-list">
                    { this.state.messages.map((val,i) => {
                        let messageType = (val.fromUser == this.props.logged) ? "sended" : "received"
                        return <Message key={i} messageType={messageType} messageText={val.text}/>
                    }) }
                </div>
                <div className="send-message">
                    <input type="text" value={this.state.inputValue} onChange={this.onInputChange} onKeyDown={this.onInputKeyDown}/>
                    <button onClick={this.onButtonClickSendMessage}>{">"}</button>
                </div>
            </div>
        )
    }

    onInputChange(e) {
        this.setState({ inputValue: e.target.value })
    }

    onInputKeyDown(e) {
        if(e.keyCode == 13) {
            this.onButtonClickSendMessage()
        }
    }

    onButtonClickSendMessage() {
        let message = {
            fromUser: this.props.logged,
            toUser: this.props.match.params.userId,
            text: this.state.inputValue
        }
        this.props.sendMessage(message)
        this.setState({ inputValue: '', messages: [...this.state.messages, message] })
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        loadMessages: (firstUserId, secondUserId) => {
            dispatch(getMessagesInChat(firstUserId, secondUserId))
        },
        sendMessage: (message) => {
            dispatch(sendMessage(message))
        },
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)
export default ChatContainer