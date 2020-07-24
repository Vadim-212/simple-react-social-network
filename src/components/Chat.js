import React from 'react'
import Message from '../components/Message'
import '../styles/Chat.css'
import User from '../components/User'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            messages: [], 
            inputValue: '',
            user: { id: this.props.match.params.userId, name: '', shortname: '' }
         }

        this.onInputChange = this.onInputChange.bind(this)
        this.onInputKeyDown = this.onInputKeyDown.bind(this)
        this.onButtonClickSendMessage = this.onButtonClickSendMessage.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ messages: nextProps.messages })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.users !== prevProps.users) {
            this.setState({user: this.getUser()})
        }
        if(this.props.messages !== prevProps.messages) {
            let messagesInChat = []
            this.props.messages.forEach(msg => {
                if((msg.fromUser == this.props.match.params.userId && msg.toUser == this.props.logged) || (msg.toUser == this.props.match.params.userId && msg.fromUser == this.props.logged)) {
                    messagesInChat.push(msg)
                }
            })
            this.setState({messages: messagesInChat})

        }
    }

    componentDidMount() {
        if(this.props.users.length > 0) {
            this.setState({user: this.getUser()})
        }
        if(this.props.messages.length > 0) {
            let messagesInChat = []
            this.props.messages.forEach(msg => {
                if((msg.fromUser == this.props.match.params.userId && msg.toUser == this.props.logged) || (msg.toUser == this.props.match.params.userId && msg.fromUser == this.props.logged)) {
                    messagesInChat.push(msg)
                }
            })
            this.setState({messages: messagesInChat})
        }
    }

    render() {
        return(
            <div className="Chat">
                <User user={this.state.user}/>
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

    getUser() {
        return this.props.users.find((user) => user.id == this.props.match.params.userId)
    }
}

export default Chat
