import React from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({
  title = '',
  onPress = () => {},
  style = {},
  textStyle = {},
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    elevation: 5,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
  },
});
