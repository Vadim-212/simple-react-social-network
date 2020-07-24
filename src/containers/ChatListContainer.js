import ChatList from '../components/ChatList'
import { connect } from 'react-redux'
import { fetchUsers, fetchMessages, getMessagesByUserId, loginSuccess } from '../model/actions'

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
        loginUser: (userId) => {
            dispatch(loginSuccess(userId))
        }
    }
}

const ChatListContainer = connect(mapStateToProps, mapDispatchToProps)(ChatList)
export default ChatListContainer