import React, { useContext, useEffect } from 'react'
import Country from './Country'

import { DataContext } from '../Context/DataContext'

const CountriesSwiper = () => {
    const { state, dispatch } = useContext(DataContext)

    useEffect(()=>{
        dispatch({type: 'CASES', payload: state.backup})
    }, [])

    return (
        <div className="countries">
            { (state.countries.length < 1) ?
                <h1>لا توجد نتائج</h1>
            :
                <div className="list-countries">
                    { 
                        state.countries.map(
                            (entry, i) => (
                                <div key={i} className="single-swiper text-center">
                                    <Country data={entry} counter={i + 1} />
                                </div>
                            )
                        )
                    }
                </div>
            }
        </div>
    )
}
export default CountriesSwiper