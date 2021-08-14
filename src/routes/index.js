import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ConnectionScreen ,
    ConnectionDetailsScreen } from '../screens';

const Stack = createStackNavigator();

 export const Routes = () =>{
     return (
         <NavigationContainer>
         <Stack.Navigator 
         screenOptions= {{
             headerShown: false,
         }}
         intialRouteName = "ConnectionScreen">
         <Stack.Screen name="ConnectionScreen" component = {ConnectionScreen} />

         <Stack.Screen name="ConnectionDetailsScreen" component = {ConnectionDetailsScreen} />
         </Stack.Navigator>
         </NavigationContainer>
     )
 }