import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SampleContext} from '.';
import {Button} from '../../components';

const BaseFormDetail = ({
  basicDetails,
  setBasicDetails,
  productDetails,
  setProductDetails,
}) => {
  const updateData = () => {
    let newData = [...basicDetails, {name: 'New Name A'}];
    setBasicDetails(newData);
    setProductDetails({...productDetails, name: 'New Name B'});
  };

  return (
    <View style={styles.container}>
      <Button title="Update form data" onPress={updateData} />
      <Text>BaseForm</Text>
      <Text>{JSON.stringify(basicDetails)}</Text>
      <Text>{JSON.stringify(productDetails)}</Text>
    </View>
  );
};

export default function BaseForm(props) {
  return (
    <SampleContext.Consumer>
      {value => (
        <BaseFormDetail
          {...props} // Pass all the props to the BaseFormDetail
          // ... means spread operator in JS
          basicDetails={value.basicDetails}
          setBasicDetails={value.setBasicDetails}
          productDetails={value.productDetails}
          setProductDetails={value.setProductDetails}
        />
      )}
    </SampleContext.Consumer>
  );
}
{
  /*   ... means spread operator in JS 
  eg:::
        let obj= {"name":'a', "name":'b'}
        let newObj= {...obj, "name":'c'}
        out- {"name":'a', "name":'b',"name":'c'}
 */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
