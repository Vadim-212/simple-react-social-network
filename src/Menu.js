import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Menu.css'

class Menu extends React.Component {
    render() {
        return(
            <div className="Menu">
                <ul>
                    <li><NavLink className="menu-link" activeClassName="menu-link-active" to="/profile">Профиль</NavLink></li>
                    <li><NavLink className="menu-link" activeClassName="menu-link-active" to="/messages">Сообщения</NavLink></li>
                    <li><NavLink className="menu-link" activeClassName="menu-link-active" to="/find">Поиск</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Menu