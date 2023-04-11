import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Header = ({title = '', menu = true}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AntIcon
        name={menu ? 'menuunfold' : 'arrowleft'}
        size={20}
        color={'#000'}
        onPress={() => (menu ? navigation.openDrawer() : navigation.goBack())}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    padding: 10,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 20,
  },
});
