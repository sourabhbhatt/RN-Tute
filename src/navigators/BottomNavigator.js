import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SampleProvider} from '../screens/Form';
const Tab = createBottomTabNavigator();

const tabArray = [
  {
    name: 'HomeTab',
    component: HomeStack,
  },
  {
    name: 'ProfileTab',
    component: ProfileStack,
  },
  {
    name: 'SampleProvider',
    component: SampleProvider,
  },
];

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'SampleProvider') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      {tabArray.map((item, index) => (
        <Tab.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigator;
