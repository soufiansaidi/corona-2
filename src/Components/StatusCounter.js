import React, {useContext} from 'react'
import TotalCounter from './TotalCounter'

import { DataContext } from '../Context/DataContext'

const StatusCounter = () => {
    const { state } = useContext(DataContext)
    let percentTotal = state.counters.total_recoverds + state.counters.total_cases_still + state.counters.total_deaths
    let percentRecoverds = ((100 * state.counters.total_recoverds) / percentTotal).toFixed(2)
    let percentStill = ((100 * state.counters.total_cases_still) / percentTotal).toFixed(2)
    let percentDeaths = ((100 * state.counters.total_deaths) / percentTotal).toFixed(2)

    return (
        <div className="general-statics">
            <div className="single-static cases">
                <TotalCounter title="الإصابات" color="#d0281c" link="/cases" total={ state.counters.total_cases } />
            </div>
            <div className="single-static recovery">
                <TotalCounter title="تعافى" color="#2ca53b" link="/recovered" percent={percentRecoverds} total={ state.counters.total_recoverds } />
            </div>
            <div className="single-static still_cases">
                <TotalCounter title="المتبقي" color="#b5b5b5" link="/cases" percent={percentStill} total={ state.counters.total_cases_still } />
            </div>
            <div className="single-static death">
                <TotalCounter title="الوفيات" color="#0d0d0d" link="/deaths" percent={percentDeaths} total={ state.counters.total_deaths } />
            </div>
        </div>
    )
}
export default StatusCounter 