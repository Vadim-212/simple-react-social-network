import UserProfile from '../components/UserProfile'
import { connect } from 'react-redux'
import { fetchUsers, userEditProfile } from '../model/actions'


function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        loadUsers: () => {
            dispatch(fetchUsers())
        },
        userEditProfile: (user) => {
            dispatch(userEditProfile(user))
        }
    }
}

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile)
export default UserProfileContainer
