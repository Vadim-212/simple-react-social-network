import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers, userEditProfile } from './model/actions'
import './UserProfile.css'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isEditable: false, user: {} }

        this.editProfile = this.editProfile.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.saveProfile = this.saveProfile.bind(this)
    }

    componentDidMount() {
        this.setState({user: this.getUser()})
    }

    render() {
        return(
            <div className="UserProfile">
                <ul id="userprofile-info-list">
                    <li>
                        <span>Идентификатор: </span>
                        <span>{this.state.user.id}</span>
                    </li>
                    <li>
                        <span>Имя: </span>
                        { (this.state.isEditable) ? <input id="user-name-input" type="text" value={this.state.user.name} onChange={this.onInputChange}/> : <span>{this.state.user.name}</span> }
                    </li>
                    <li>
                        <span>Короткое имя: </span>             
                        { (this.state.isEditable) ? <input id="user-shortname-input" type="text" value={this.state.user.shortName} onChange={this.onInputChange}/> : <span>{this.state.user.shortName}</span> }
                    </li>
                </ul>
                { (this.state.isEditable) ? <button className="userprofile-action-button" onClick={this.saveProfile}>Сохранить</button> : <button className="userprofile-action-button" onClick={this.editProfile}>Редактировать</button> }
            </div>
        )
    }

    getUser() {
        return this.props.users.find((user) => user.id == this.props.logged)
    }

    editProfile() {
        this.setState({ isEditable: true })
    }

    saveProfile() {
        if(this.props.users.filter(user => (user.shortName == this.state.user.shortName) && (user.id != this.state.user.id))[0] != undefined) {
            alert('Пользователь с таким коротким именем уже существует!')
        } else {
            this.props.userEditProfile(this.state.user)
            this.setState({ isEditable: false })
        }
    }

    onInputChange(e) {
        switch(e.target.id) {
            case "user-name-input":
                this.setState({user: {id: this.state.user.id, name: e.target.value, shortName: this.state.user.shortName}})
                break
            case "user-shortname-input":
                this.setState({user: {id: this.state.user.id, name: this.state.user.name, shortName: e.target.value}})
                break
        }
    }
}

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