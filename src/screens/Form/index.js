import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BaseForm from './BaseForm';
import ProductForm from './ProductForm';
const Stack = createNativeStackNavigator();

// Create a context
// 1- Provider - provides the data
// 2- Consumer - consumes the data

export const SampleContext = React.createContext();

export const SampleProvider = ({}) => {
  const [basicDetails, setBasicDetails] = useState([]);
  const [productDetails, setProductDetails] = useState({});

  return (
    <SampleContext.Provider
      value={{
        basicDetails: basicDetails,
        setBasicDetails: setBasicDetails,
        productDetails: productDetails,
        setProductDetails: setProductDetails,
      }}>
      <Stack.Navigator>
        <Stack.Screen name="BaseForm" component={BaseForm} />
        <Stack.Screen name="ProductForm" component={ProductForm} />
      </Stack.Navigator>
    </SampleContext.Provider>
  );
};
