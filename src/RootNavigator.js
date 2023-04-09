import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './navigators/BottomNavigator';
import AuthNavigator from './navigators/AuthNavigator';

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isAuthenticated ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
