/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Container from '../../screens/ContainersScreen';
import Employees from '../EmployeesScreen';
import Settings from '../SettingsScreen';
import ContainersScreen from '../ContainersScreen';
const Tab = createBottomTabNavigator();
const Component = () => {
    return (
      <Tab.Navigator
      initialRouteName= "Containers"
      screenOptions={{headerShown: false}}>
        <Tab.Screen name="Containers" component={ContainersScreen} />
        <Tab.Screen name="Employees" component={Employees} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
};

export default Component;

