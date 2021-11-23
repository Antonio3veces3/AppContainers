/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';
import ContainerScreen from '../../screens/ContainersScreen';
import { Containers } from '../../data/DataContainers/index';
import DetailScreen from '../../screens/DetailScreen';


export type MainParams= {
    Splash: undefined;
    Login: undefined;
    Home: undefined;
    ContainersScreen: typeof Containers;
}

const Stack = createNativeStackNavigator();
 const Component = () => {
    return (
        <Stack.Navigator
      initialRouteName= "Splash"
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ContainersScreen" component={ContainerScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    );
};

export default Component;
