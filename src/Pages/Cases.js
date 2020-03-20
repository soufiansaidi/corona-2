import React, { useContext, useEffect } from 'react'

import PageTitle from './../Components/PageTitle'
import FilterForm from './../Components/FilterForm'
import ListCountrieFiltred from './../Components/ListCountrieFiltred'

import { DataContext } from '../Context/DataContext'
import { ApplicationContext } from '../Context/ApplicationContext'

const Cases = () => {
    const { state, dispatch } = useContext(DataContext)
    const { setState } = useContext(ApplicationContext)

    useEffect(()=>{
        dispatch({type: 'CASES', payload: state.backup})
        setState( state => ({...state, menu: false}) )
    }, [])

    return (
        <>
            <PageTitle title="الحالات المصابة بفايروس كورونا" />
            <FilterForm />
            <ListCountrieFiltred type="cases" col="الاصابات" />
        </>
    )
}
export default Cases