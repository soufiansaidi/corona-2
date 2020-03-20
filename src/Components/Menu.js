import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ApplicationContext } from './../Context/ApplicationContext'

const Menu = () => {
    const { state } = useContext(ApplicationContext)

    return (
        <nav className={ state.menu ? 'active': '' }>
            <div>
                <Link to="/">الرئيسية</Link>
                <Link to="/deaths">الوفيات</Link>
                <Link to="/recovered">المتعفى</Link>
                <Link to="/cases">الاصابات</Link>
                <Link to="/Informations">الاعراض و الوقاية</Link>
            </div>
        </nav>
    )
}

export default Menu