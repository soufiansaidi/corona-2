import React from 'react'
// import CountUp from 'react-countup'

import Flags from './Flags'

function toCommas(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Country = ( props ) => {
    const { data, counter } = props;

    return (
        <div className="wrapper">
            <Flags name={ data.country } />
            <div className="counter">{counter}</div>
            <div className="country-data">
                <h4>{ data.country }</h4>
                <div className="country-statics">
                    <div className="cases"><div>الإصابات</div>{(data.cases) ? toCommas(data.cases) : 0 }</div>
                    <div className="death"><div>الوفيات</div>{(data.deaths) ? toCommas(data.deaths) : 0 }</div>
                    <div className="recovery"><div>تعافى</div>{(data.recovered) ? toCommas(data.recovered) : 0 }</div>
                </div>
            </div>
        </div>
    )
}

export default Country