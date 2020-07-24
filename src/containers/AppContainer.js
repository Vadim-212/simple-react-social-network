import App from '../components/App'
import { loginSuccess, fetchUsers, fetchMessages } from '../model/actions';
import { connect } from 'react-redux';

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