import React from 'react'
import User from '../components/User'
import { Link } from 'react-router-dom'
import '../styles/FindUsers.css'

class FindUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredUsers: [],
            inputValue: ''
        }

        this.onInputChange = this.onInputChange.bind(this)
    }

    render() {
        return(
            <div className="FindUsers">
                <div>
                    <input id="findusers-search-input" type="text" placeholder="Искать пользователей..." value={this.state.inputValue} onChange={this.onInputChange}/>
                    <div id="findusers-search-input-border-div"></div>
                </div>
                <ul id="findusers-users-list">
                    { this.state.filteredUsers.map((val, i) => {
                        return <li key={i}>
                            <Link to={`/chat/${val.id}`}>
                                <User user={val}/>
                            </Link>
                        </li>
                    }) }
                </ul>
            </div>
        )
    }

    onInputChange(e) {
        let searchValue = e.target.value
        if(searchValue == '') {
            this.setState({ filteredUsers: [], inputValue: searchValue })
            return
        }
        let filteredUsers = this.props.users.filter(user => user.name.toLocaleLowerCase().includes(searchValue) || user.shortName.toLocaleLowerCase().includes(searchValue))
        this.setState({ filteredUsers: filteredUsers, inputValue: searchValue })
    }
}

export default FindUsers
