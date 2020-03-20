import React, { useContext, useEffect } from 'react'

import PageTitle from './../Components/PageTitle'
import FilterForm from './../Components/FilterForm'
import ListCountrieFiltred from './../Components/ListCountrieFiltred'

import { DataContext } from '../Context/DataContext'
import { ApplicationContext } from '../Context/ApplicationContext'

const Deaths = () => {
    const { state, dispatch } = useContext(DataContext)
    const { setState } = useContext(ApplicationContext)

    useEffect(()=>{
        dispatch({type: 'DEATH', payload: state.backup})
        setState( state => ({...state, menu: false}) )
    }, [])

    return (
        <>
            <PageTitle title="الوفيات بفايروس كورونا" />
            <FilterForm />
            <ListCountrieFiltred type="deaths" col="الوفيات" />
        </>
    )
}
export default Deaths