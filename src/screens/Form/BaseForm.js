import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SampleContext} from '.';
import {Button} from '../../components';
import axios from 'axios';
import {appUrls, getPosts, updatePosts} from '../../API';
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

  useEffect(() => {
    getPosts().then(response => {
      console.log('data fetched ::::: ', response.data);
    });
  }, []);

  const updateApiData = () => {
    let data = {
      id: 1,
      title: 'foo-foo',
      body: 'bar-bar',
      userId: 1,
    };
    updatePosts(JSON.stringify(data)).then(response => {
      console.log('data updated', response);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Update form data" onPress={updateData} />
      <Text>BaseForm</Text>
      <Text>{JSON.stringify(basicDetails)}</Text>
      <Text>{JSON.stringify(productDetails)}</Text>
      <Button title="Update api data " onPress={updateApiData} />
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
