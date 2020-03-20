import React, { useContext } from 'react'
import { ApplicationContext } from './../Context/ApplicationContext'
import { Link } from 'react-router-dom'

const NoMatch = () => {
    const { translation } = useContext(ApplicationContext)
    return (
        <div className="my-5 py-5 text-center page-404">
            <h1 className="title-404">{ translation.page_404 }</h1>
            <Link className="button-404" to="/">{ translation.back }</Link>
        </div>
    )
}

export default NoMatch