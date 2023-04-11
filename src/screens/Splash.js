import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {images} from '../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTimeout(() => {
        navigation.navigate('SignIn');
      }, 500);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={images.boy} style={styles.img} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
