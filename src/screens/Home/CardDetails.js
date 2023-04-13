import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';

const CardDetails = ({route}) => {
  console.log('route.params', route.params);
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Header title={item?.name} menu={false} />
      <Image source={{uri: item?.image}} style={styles.img} />
      <Text style={styles.title}>{item?.name}</Text>
      <Text style={styles.text}>{item?.email}</Text>
      <Text style={styles.text}>{item?.address}</Text>
      <Text style={styles.text}>{item?.phone}</Text>
    </View>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    padding: 10,
  },
  text: {
    fontSize: 13,
    color: '#000',
    padding: 10,
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    resizeMode: 'cover',
  },
});
