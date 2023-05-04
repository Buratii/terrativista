import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@pages/Login';
import OnBoarding from '@pages/OnBoarding';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
    </Stack.Navigator>
  );
}

export default App;
