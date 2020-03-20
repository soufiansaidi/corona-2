import React, { createContext, useState } from 'react'

export const ApplicationContext = createContext()

export const ApplicationContextProvider = ({ children }) => {
    const [ state, setState ] = useState({
        menu: false
    })

    return (
        <ApplicationContext.Provider value={{ state, setState }}>
            { children }
        </ApplicationContext.Provider>
    )
}