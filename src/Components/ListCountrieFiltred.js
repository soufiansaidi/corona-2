import React, { useContext } from 'react'
import Country2 from './Country2'

import { DataContext } from '../Context/DataContext'

const ListCountrieFiltred = ({ type, col }) => {
    const { state } = useContext(DataContext)

    return (
        <div className="countries-2">
            { (state.countries.length < 1) ?
                <h1>لا توجد نتائج</h1>
            :
                <div className="list-countries">
                    <div className="single-swiper">
                        <div className="wrapper">
                            <h4>الدولة</h4>
                            <h4>{ col }</h4>
                        </div>
                    </div>
                    {   
                        state.countries.map(
                            (entry, i) => (
                                <div key={i} className="single-swiper">
                                    {(type === "cases") && <Country2 name={entry.country} number={ entry.cases } counter={i + 1} />}
                                    {(type === "deaths") && <Country2 name={entry.country} number={ entry.deaths } counter={i + 1} />}
                                    {(type === "recovered") && <Country2 name={entry.country} number={ entry.recovered } counter={i + 1} />}
                                </div>
                            )
                        )
                    }
                </div>
            }
        </div>
    )
}

export default ListCountrieFiltred