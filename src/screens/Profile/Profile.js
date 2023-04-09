import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../components';
import {images} from '../../utils';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hello, from Profile screen</Text>
      <Image source={images.boy} style={styles.img} />
      <Button title="back" onPress={() => navigation.pop()} />
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Profile;

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
