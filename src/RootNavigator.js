import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './navigators/AuthNavigator';
import DrawerNavigator from './navigators/DrawerNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {storage} from './utils';
import {setToken, setUserDetail} from './redux/slice/userSlice';

const RootNavigator = () => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state?.user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    if (token) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }, [token]);

  useEffect(() => {
    let userInfo = storage.getString('userInfo');
    if (userInfo && (userInfo !== 'undefined' || userInfo !== null)) {
      userInfo = JSON.parse(userInfo);
      setIsAuthenticated(true);
      dispatch(setToken('ldjhfgh874d793nkdf9e7tnlnbc7e098')); // dummy token
      dispatch(setUserDetail(userInfo)); // dummy user detail
    } else setIsAuthenticated(false);
  }, []);

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
