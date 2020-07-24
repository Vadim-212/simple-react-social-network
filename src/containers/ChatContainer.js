import Chat from '../components/Chat'
import { connect } from 'react-redux'
import { sendMessage, getMessagesInChat } from '../model/actions'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        sendMessage: (message) => {
            dispatch(sendMessage(message))
        },
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)
export default ChatContainer
