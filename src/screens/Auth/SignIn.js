import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '../../components';
import {useDispatch} from 'react-redux';
import {setToken, setUserDetail} from '../../redux/slice/userSlice';
import {ValidateEmail, storage} from '../../utils';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    let data = {
      name: 'Raj',
      email: 'raj@gmail.com',
      phone: '1234567890',
      address: 'India',
      image:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    };
    storage.set('userInfo', JSON.stringify(data));
    dispatch(setToken('ldjhfgh874d793nkdf9e7tnlnbc7e098'));
    dispatch(setUserDetail(data));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={val => {
          if (ValidateEmail(val)) {
            setEmail(val);
            setEmailError('');
          } else {
            setEmail(val);
            setEmailError('Please enter valid email');
          }
        }}
        style={styles.textInput}
      />
      {emailError && <Text style={styles.error}>{emailError}</Text>}
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
        style={styles.textInput}
      />
      <Text
        style={styles.signupText}
        onPress={() => navigation.navigate('Signup')}>
        New user? Sign up ?
      </Text>
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default SignIn;

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
  signupText: {
    fontSize: 13,
    color: 'blue',
    textAlign: 'right',
    margin: 10,
    marginRight: 20,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
  },
});
