import React from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'

const TotalCounter = ( props ) => {
    const { title, total, link, color, percent } = props

    return (
        <div className="single-counter">
            <Link to={ link }>
                <h3><i className={ color }></i>{ title }</h3>
                <div className="counter-total">
                    { total && <CountUp separator="," end={ total } /> }
                    { (percent) && <div className="counter-plus">({percent} %)</div> }
                </div>
            </Link>
        </div>
    )
}
export default TotalCounter