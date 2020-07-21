import React from 'react'
import Message from './Message'
import './Chat.css'
import { connect } from 'react-redux'
import { sendMessage, getMessagesByUserId } from './model/actions'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.setState({ messages: [] })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ messages: nextProps.messages })
    }

    componentDidMount() {
        this.props.loadMessages(1)
    }

    render() {
        return(
            <div className="Chat">
                <div className="messages-list">
                    <Message messageType="sended" messageText="hello"/>
                    <Message messageType="received" messageText="hi!"/>
                    <Message messageType="sended" messageText="i am user 1"/>
                    <Message messageType="received" messageText="i am user 2"/>
                    <Message messageType="sended" messageText="and this is test messages"/>
                    <Message messageType="received" messageText="yes!"/>
                </div>
                <div className="send-message">
                    <input type="text"/>
                    <button >{">"}</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        loadMessages: (userId) => {
            dispatch(getMessagesByUserId(userId))
        },
        sendMessage: (message) => {
            dispatch(sendMessage(message))
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)
export default ChatContainer