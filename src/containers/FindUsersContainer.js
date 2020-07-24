import FindUsers from '../components/FindUsers'
import { connect } from 'react-redux'
import { fetchUsers } from '../model/actions'

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

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)
export default FindUsersContainer
