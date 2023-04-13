import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {Button} from '../../components';
import ImagePicker from 'react-native-image-crop-picker';
import {images, storage} from '../../utils';
import {useDispatch} from 'react-redux';
import {setToken, setUserDetail} from '../../redux/slice/userSlice';

const SignUP = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [image, setImage] = useState(null);

  const signUp = () => {
    let data = {
      name: firstName + ' ' + lastName,
      email: email,
      phone: mobile,
      image: image,
    };
    storage.set('userInfo', JSON.stringify(data));
    dispatch(setToken('ldjhfgh874d793nkdf9e7tnlnbc7e098'));
    dispatch(setUserDetail(data));
  };

  const selectImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => setImage(image.path));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Sign up here </Text>

      <Pressable onPress={selectImage}>
        <Image
          source={image ? {uri: image} : images.boy}
          style={styles.imgPlaceholder}
        />
      </Pressable>

      <TextInput
        placeholder="first name"
        placeholderTextColor={'gray'}
        value={firstName}
        onChangeText={setFirstName}
        style={styles.textInput}
      />
      <TextInput
        placeholder="last name"
        placeholderTextColor={'gray'}
        value={lastName}
        onChangeText={setLastName}
        style={styles.textInput}
      />
      <TextInput
        placeholder="mobile"
        placeholderTextColor={'gray'}
        value={mobile}
        keyboardType="numeric"
        maxLength={10}
        onChangeText={setMobile}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor={'gray'}
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={'gray'}
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
        style={styles.textInput}
      />
      <Button title="Sign up" onPress={signUp} />
    </ScrollView>
  );
};

export default SignUP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  imgPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#eee',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 50,
  },
});
