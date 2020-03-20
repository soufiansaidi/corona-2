import React from 'react'
import Flags from './Flags'

function toCommas(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Country2 = ( props ) => {
    const { name, counter, number } = props;

    return (
        <div className="wrapper">
            <div style={{display: 'flex',alignItems: 'center'}}>
                <Flags name={ name } />
                <h4>{ name } ({counter})</h4>
            </div>
            <div className="country-statics">{(number) ? toCommas(number) : 0 }</div>
        </div>
    )
}

export default Country2