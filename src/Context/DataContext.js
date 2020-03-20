import React, { createContext, useReducer, useState, useEffect } from 'react'
import axios from 'axios'

export const DataContext = createContext()

const initialState = {
    last_update: '',
    backup: [],
    countries: [],
    counters: [],
    error: null
};

const DataReducer = (state, action) => {
    let newData

    switch(action.type){
        case 'SET_DATA':
            return { 
                    ...state, 
                    last_update: action.payload.last_updated, 
                    backup: action.payload.entries, 
                    countries: action.payload.entries, 
                    counters: {
                        total_cases: action.payload.total_cases,
                        total_deaths: action.payload.total_deaths,
                        total_recoverds: action.payload.total_recoverds,
                        total_cases_still: action.payload.total_cases - action.payload.total_deaths - action.payload.total_recoverds
                    }
            }
        case 'SET_ERROR':
            return state
        case 'CASES': 
            newData = state.backup.sort((countryA, countryB) => countryB.cases - countryA.cases)
            return {...state, countries: newData};
        case 'DEATH':
            newData = state.backup.sort((countryA, countryB) => countryB.deaths - countryA.deaths)
            return {...state, countries: newData};
        case 'RECOVERY':
            newData = state.backup.sort((countryA, countryB) => countryB.recovered - countryA.recovered)
            return {...state, countries: newData};
        case 'SEARCH':
            newData = state.backup.filter((country) => country.country.indexOf(action.payload) !== -1 )
            return {...state, countries: newData};
        default :
            return state
    }
}

export const DataContextProvider = props => {
    const [ state, dispatch ] = useReducer(DataReducer, initialState)
    // const [ getData, setGetDATA ] = useState(false)

    // useEffect(() => {
        // setGetDATA(true)
    // }, [])

    useEffect(() => {
        axios.get('https://corona.haamapp.com/api/v1/admin/sites/corona/ar', {})
        .then(res => {
            res.data.entries.sort((entryA, entryB) => entryB.cases - entryA.cases)
            dispatch({type: 'SET_DATA', payload: res.data})
        }).catch(error => {
            dispatch({type: 'SET_ERROR', payload: error})
        })
    }, []);

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            { props.children }
        </DataContext.Provider>
    )
}