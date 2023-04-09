import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

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
];

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      {tabArray.map((item, index) => (
        <Tab.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigator;
