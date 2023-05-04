import React from 'react'
import { LocationProvider } from './location'

const AppProvider = ({ children }: any) => {
  return <LocationProvider>{children}</LocationProvider>
}

export default AppProvider
