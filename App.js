import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

import { Home } from './src/pages/Home/Home';
import { Detalhes } from './src/pages/Detalhes/Detalhes';
import { Cart } from './src/pages/Cart/Cart'
import { AdressAndPayment } from "./src/pages/AdressAndPayment/AdressAndPayment";

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        animation:"slide_from_right"
      }}>

        <Stack.Screen name='Home' component={Home} options={{
          headerShown: false,
        }}/>

        <Stack.Screen name='Detalhes' component={Detalhes} options={{
          title: 'Produto',
          headerStyle: {backgroundColor: 'rgb(3,147,213)',},
          headerTintColor: '#fff',
          headerTitleAlign: 'center' 
        }}/>
        
        <Stack.Screen name='Cart' component={Cart} options={{
          title: 'Carrinho',
          headerStyle: {backgroundColor: 'rgb(3,147,213)'},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}/>

        <Stack.Screen name='AdressAndPayment' component={AdressAndPayment} options={{
          title: 'Inormações da Compra',
          headerStyle: {backgroundColor: 'rgb(3,147,213)'},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}/>
    </Stack.Navigator>
    </NavigationContainer>

  );
}

