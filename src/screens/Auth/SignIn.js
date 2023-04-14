import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '../../components';
import {useDispatch} from 'react-redux';
import {setToken, setUserDetail} from '../../redux/slice/userSlice';
import {ValidateEmail, storage} from '../../utils';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId:
    '529235110375-utj7gm1eds089ndb53nmlhgfpak9575t.apps.googleusercontent.com',
});
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
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      signOut();
      const userInfo = await GoogleSignin.signIn();
      storage.set('userInfo', JSON.stringify(userInfo));
      // dispatch(setToken(userInfo?.idToken));
      // dispatch(setUserDetails(userInfo?.user));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In screen</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={'gray'}
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
        placeholderTextColor={'gray'}
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
      <GoogleSigninButton
        style={{width: '70%', height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onGoogleButtonPress}
        disabled={false}
      />
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
    color: '#000',
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
