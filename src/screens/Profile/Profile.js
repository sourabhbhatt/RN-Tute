import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from '../../components';
import {images, storage} from '../../utils';
import {logOut} from '../../redux/slice/userSlice';
import {useDispatch} from 'react-redux';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  useEffect(() => {
    let userInfo = storage.getString('userInfo');
    if (userInfo && (userInfo !== 'undefined' || userInfo !== null)) {
      userInfo = JSON.parse(userInfo);
      console.log('userInfo', userInfo);
      setImage(userInfo.image);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, from Profile screen</Text>
      <Image source={image ? {uri: image} : images.boy} style={styles.img} />
      <Button title="back" onPress={() => navigation.pop()} />
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Log out"
        onPress={() => {
          dispatch(logOut());
          storage.delete('userInfo');
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 19,
    padding: 10,
    color: '#000',
  },
  img: {
    width: '80%',
    height: 100,
    borderRadius: 2,
    alignSelf: 'center',
  },
});
