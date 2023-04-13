/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import linking from './src/linking';

export default function Main() {
  return (
    <Provider store={store}>
      <NavigationContainer
        linking={linking}
        fallback={
          <Text style={{color: '#000', fontSize: 20}}>Loading...</Text>
        }>
        <App />
      </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
