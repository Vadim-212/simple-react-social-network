import Chat from '../components/Chat'
import { connect } from 'react-redux'
import { sendMessage, getMessagesInChat } from '../model/actions'

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
