import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {width, imagePlaceholder} from '../utils';

const Card = ({
  name = '',
  email = '',
  image = null,
  address = '',
  phone = '',
  onPress = () => {},
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{uri: image || imagePlaceholder}} style={styles.img} />
      <Text style={styles.title}>{name || 'No name available'}</Text>
      <Text style={styles.text}>{email || 'No email available'}</Text>
      <Text style={styles.text}>{address || 'No address available'}</Text>
      <Text style={styles.text}>{phone || 'No phone number available'}</Text>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
    elevation: 5,
    padding: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#eee',
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    margin: 10,
  },
  text: {
    fontSize: 13,
    color: '#000',
    textAlign: 'left',
    marginLeft: 10,
  },
});
