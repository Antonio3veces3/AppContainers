/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Container from '../../screens/ContainersScreen';
import Employees from '../EmployeesScreen';
import SettingsScreen from '../SettingsScreen';
import {Icon} from 'react-native-elements';
const Tab = createBottomTabNavigator();

const Component = () => {
    return (
      <Tab.Navigator
      initialRouteName= "Containers"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName = '';
          if (route.name === 'Containers') {
            iconName = focused
              ? 'truck-fast'
              : 'truck-fast';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog';
          } else {
            iconName = focused ? 'account-details' : 'account-details';
          }

          // You can return any component that you like here!
          return <Icon type="material-community" name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Containers" component={Container} />
        <Tab.Screen name="Employees" component={Employees} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
};
export default Component;

