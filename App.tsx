import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'
import { NavigationContainer } from '@react-navigation/native'
import AppRoutes from '@routes/App.routes'
import AppProvider from './src/hooks'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}
