import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useFetchData from '../hook/useFetchData';
import useNonInitialEffect from '../hook/useNonInitialEffect';

const UseFetchDataEg = () => {
  const [count, setCount] = useState(0);
  const {loading, error, data} = useFetchData(
    'https://jsonplaceholder.typicode.com/todos',
  );

  useNonInitialEffect(() => {
    console.log('Effect ran!', count);
  }, [count]); // Only run the effect when count changes, skip initial render

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error?.message || ''}</Text>;
  }
  if (!data) {
    return null;
  }
  return (
    <View>
      <Text>Data: {JSON.stringify(data)}</Text>
    </View>
  );
};

export default UseFetchDataEg;

const styles = StyleSheet.create({});
