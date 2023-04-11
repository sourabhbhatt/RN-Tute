import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {data} from '../../utils';
import Card from '../../components/Card';
import Header from '../../components/Header';

const Home = ({navigation}) => {
  const [products, setProducts] = useState(data);

  return (
    <View style={styles.container}>
      <Header title={'E-com '} />
      <FlatList
        data={products}
        style={{flex: 1}}
        renderItem={({item, index}) => {
          return (
            <Card
              key={index}
              name={item.name}
              email={item.email}
              image={item.image}
              address={item.address}
              phone={item.phone}
              onPress={() => navigation.navigate('Details', {item: item})}
            />
          );
        }}
        keyExtractor={item => item}
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
  button: {
    width: '90%',
  },
});
