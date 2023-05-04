import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import * as ExpoLocation from 'expo-location'
import { api } from '@services/api'
import { Location } from '@interfaces/location.interface'

type LocationContextData = {
  getLocation: () => Promise<Location>
  loading: boolean
  errorMsg: string
}

type LocationProviderProps = {
  children: ReactNode
}

const LocationContext = createContext({} as LocationContextData)

function LocationProvider({ children }: LocationProviderProps) {
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const getLocation = useCallback(async () => {
    try {
      setLoading(true)
      const { status } = await ExpoLocation.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      const { coords } = await ExpoLocation.getCurrentPositionAsync({})

      const { data } = await api.get(
        `/reverse?lat=${coords.latitude}&lon=${coords.longitude}`,
      )

      setLoading(false)

      return data
    } catch (error) {
      throw Error('Failed to get location.')
    }
  }, [])

  return (
    <LocationContext.Provider value={{ getLocation, loading, errorMsg }}>
      {children}
    </LocationContext.Provider>
  )
}

function useLocation(): LocationContextData {
  const context = useContext(LocationContext)

  if (!context) {
    throw new Error('useLocation must be used within an LocationProvider')
  }

  return context
}

export { LocationProvider, useLocation }
