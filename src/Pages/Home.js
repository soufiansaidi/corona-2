import React, { useContext, useEffect } from 'react'

import PageTitle from './../Components/PageTitle'
import Chart from './../Components/Chart'
import FilterForm from './../Components/FilterForm'
import StatusCounter from './../Components/StatusCounter'
import CountriesSwiper from './../Components/CountriesSwiper'

import { ApplicationContext } from '../Context/ApplicationContext'

const Home = () => {
  const { setState } = useContext(ApplicationContext)

  useEffect(()=>{
      setState( state => ({...state, menu: false}) )
  }, [])

  return (
    <>
      <PageTitle title="حالات كورونا-١٩ العالمية" />
      <Chart />
      <StatusCounter />
      <FilterForm />
      <CountriesSwiper />
    </>
  );
}

export default Home;
