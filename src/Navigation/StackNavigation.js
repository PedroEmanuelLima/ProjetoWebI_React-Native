import React from "react";
import {TouchableOpacity, Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

import { Home } from '../pages/Home/Home';
import { Detalhes } from '../pages/Detalhes/Detalhes';
import { Cart } from '../pages/Cart/Cart'
import { AdressAndPayment } from "../pages/AdressAndPayment/AdressAndPayment";
import { Chat } from "../pages/Chat/Chat";
import { Track } from "../pages/Track/Track";

export default function StackNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        animation:"slide_from_right"
      }}>

        <Stack.Screen name='Home' component={Home} options= {({ navigation }) => ({
          title: 'E-commerce',
          headerStyle: {backgroundColor: 'rgb(3,147,213)',},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart") } >
              <Image
                  source={require("../assets/shopping_cart.png")} 
                  style={{width:40, height:40}}     
              />
          </TouchableOpacity>
          ),
          
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Track")}>
              <Image
                  source={require("../assets/tracking.png")} 
                  style={{width:40, height:40}}     
              />
          </TouchableOpacity>
          ),   
        })}/>

        <Stack.Screen name='Detalhes' component={Detalhes} options= {({ navigation }) => ({
          title: 'Produto',
          headerStyle: {backgroundColor: 'rgb(3,147,213)',},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart") } >
              <Image
                  source={require("../assets/shopping_cart.png")} 
                  style={{width:40, height:40}}     
              />
          </TouchableOpacity>

          ),        
        })}/>
        
        <Stack.Screen name='Cart' component={Cart} options={{
          title: 'Carrinho',
          headerStyle: {backgroundColor: 'rgb(3,147,213)'},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}/>

        <Stack.Screen name='AdressAndPayment' component={AdressAndPayment} options={{
          title: 'Informações de Pagamento',
          headerStyle: {backgroundColor: 'rgb(3,147,213)'},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}/>

        <Stack.Screen name='Chat' component={Chat} options={{
          title:'Chat',
          headerStyle: {backgroundColor: 'rgb(3,147,213)'},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}/>

        <Stack.Screen name='Track' component={Track} options={{
          title: 'Rastrear encomenda',
          headerStyle: {backgroundColor: 'rgb(3,147,213)'},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}/>
    
    </Stack.Navigator>
    </NavigationContainer>

  );
}

