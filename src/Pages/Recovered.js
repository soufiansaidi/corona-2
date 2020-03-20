import React, { useContext, useEffect } from 'react'

import PageTitle from './../Components/PageTitle'
import FilterForm from './../Components/FilterForm'
import ListCountrieFiltred from './../Components/ListCountrieFiltred'

import { DataContext } from '../Context/DataContext'
import { ApplicationContext } from '../Context/ApplicationContext'

const Recovered = () => {
    const { state, dispatch } = useContext(DataContext)
    const { setState } = useContext(ApplicationContext)

    useEffect(()=>{
        dispatch({type: 'RECOVERY', payload: state.backup})
        setState( state => ({...state, menu: false}) )
    }, [])

    return (
        <>
            <PageTitle title="التعافي من فايروس كورونا" />
            <FilterForm />
            <ListCountrieFiltred type="recovered" col="التعافي" />
        </>
    )
}
export default Recovered