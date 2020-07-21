import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li><Link to="/profile">Профиль</Link></li>
                    <li><Link to="/messages">Сообщения</Link></li>
                    <li><Link to="/chat">тест чата</Link></li>
                </ul>
            </div>
        )
    }
}

export default Menu