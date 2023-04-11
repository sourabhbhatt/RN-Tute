import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './navigators/AuthNavigator';
import DrawerNavigator from './navigators/DrawerNavigator';

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isAuthenticated ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
