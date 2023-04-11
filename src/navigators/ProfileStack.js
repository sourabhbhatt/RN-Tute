import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Profile from '../screens/Profile/Profile';

const Stack = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
