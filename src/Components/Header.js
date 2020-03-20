import React, { useContext } from 'react'
import { ApplicationContext } from './../Context/ApplicationContext'
import Haam from './Haam'

const Header = () => {
    const { setState } = useContext(ApplicationContext)

    return (
        <>
            <header>
                <div className="header-right">
                    <div className="toggleMenu" onClick={ () => setState( state => ({ ...state, menu: !state.menu })) }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h1>كورونا-١٩</h1>
                </div>
                <div className="last_update">{ new Date().toLocaleDateString() }</div>
            </header>
            <Haam />
        </>
    )
}
export default Header