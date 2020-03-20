import React from 'react'

import { ApplicationContextProvider } from './Context/ApplicationContext'
import { DataContextProvider } from './Context/DataContext'

import DirectionPage from './Components/DirectionPage'

const App = () => {
  return (
    <ApplicationContextProvider>
      <DataContextProvider>
        <DirectionPage />
      </DataContextProvider>
    </ApplicationContextProvider>
  );
}

export default App;
