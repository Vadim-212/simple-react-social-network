import React from 'react'

class UserProfile extends React.Component {
    render() {
        return(
            <div className="UserProfile">
                <ul>
                    <li>
                        <span>Имя: </span>
                        <span>User1</span>
                    </li>
                    <li>
                        <span>Идентификатор: </span>
                        <span>1</span>
                    </li>
                    <li>
                        <span>Короткое имя: </span>
                        <span>user1</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserProfile