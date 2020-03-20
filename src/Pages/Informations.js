import React, { useEffect, useContext } from 'react'
import PageTitle from './../Components/PageTitle'

import { ApplicationContext } from '../Context/ApplicationContext'

const Informations = () => {
    const { setState } = useContext(ApplicationContext)

    useEffect(()=>{
        setState( state => ({...state, menu: false}) )
    }, [])

    return (
        <>
            <PageTitle title="الاعراض و الوقاية" />
            <div className="symptoms">
                <h3>الاعراض</h3>
                <ul>
                    <li><i className="fever"></i> حمى</li>
                    <li><i className="cough"></i> سعال</li>
                    <li><i className="breath"></i> صعوبة في التنفس</li>
                    <li><i className="pain"></i> ألم عضلي</li>
                    <li><i className="tired"></i> التعب</li>
                </ul>
            </div>
            <div className="protection">
                <h3>الوقاية</h3>
                <p>توفر لك حماية ضد الفيروسات</p>
                <ul>
                    <li><i className="mask"></i> قناع</li>
                    <li><i className="gloves"></i> قفازات</li>
                    <li><i className="alcohol"></i> الكحول</li>
                    <li><i className="soap"></i> صابون</li>
                </ul>
            </div>
        </>
    )
}
export default Informations