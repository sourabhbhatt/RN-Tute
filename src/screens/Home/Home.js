import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../utils';
import {Button} from '../../components';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hello, from home screen</Text>
      <Image source={images.boy} style={styles.img} />
      <Button
        title="Go to Profile"
        onPress={() => navigation.push('Profile')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 2,
  },
});
