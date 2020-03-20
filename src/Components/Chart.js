import React, { useContext } from 'react'
import ReactMinimalPieChart from 'react-minimal-pie-chart';

import { DataContext } from '../Context/DataContext'

const Chart = () => {
    const { state } = useContext(DataContext)
    let percentTotal = state.counters.total_cases
    let percentRecoverds = ((100 * state.counters.total_recoverds) / percentTotal).toFixed(2)
    let percentStill = ((100 * state.counters.total_cases_still) / percentTotal).toFixed(2)
    let percentDeaths = ((100 * state.counters.total_deaths) / percentTotal).toFixed(2)

    if(!percentTotal) return <div>Loading</div> 
    else return (
        <div className="chart-percent">
            <div className="chart">
                <ReactMinimalPieChart
                    animate={true}
                    animationDuration={500}
                    animationEasing="ease-out"
                    cx={50}
                    cy={50}
                    data={[
                        {
                            color: '#d0281c',
                            title: 'المتبقي',
                            value: state.counters.total_cases_still
                        },
                        {
                            color: '#2ca53b',
                            title: 'تعافى',
                            value: state.counters.total_recoverds
                        },
                        {
                            color: '#0d0d0d',
                            title: 'الوفيات',
                            value: state.counters.total_deaths
                        }
                    ]}
                    label={false}
                    labelPosition={50}
                    lengthAngle={360}
                    lineWidth={35}
                    onClick={undefined}
                    onMouseOut={undefined}
                    onMouseOver={undefined}
                    paddingAngle={0}
                    radius={50}
                    rounded={false}
                    startAngle={0}
                    viewBoxSize={[
                        100,
                        100
                    ]}
                />
            </div>

            <div className="percents">
                <div className="percent still">
                    <i></i>
                    <div>
                        <h3>المتبقي</h3>
                        <span>{ percentStill }%</span>
                    </div>
                </div>
                <div className="percent recovered">
                    <i></i>
                    <div>
                        <h3>تعافى</h3>
                        <span>{ percentRecoverds }%</span>
                    </div>
                </div>
                <div className="percent death">
                    <i></i>
                    <div>
                        <h3>الوفيات</h3>
                        <span>{ percentDeaths }%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart