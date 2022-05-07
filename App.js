import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, CardStyleInterpolators } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
import { Home } from './src/pages/Home/Home';
import { Detalhes } from './src/pages/Detalhes/Detalhes';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Detalhes' component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

