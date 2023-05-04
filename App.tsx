import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from '@routes/App.routes';
import AppProvider from './src/hooks';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Schibsted-Grotesk': require('@assets/fonts/SchibstedGrotesk.ttf'),
    // 'Schibsted-Regular': require('@assets/fonts/SchibstedGrotesk-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
