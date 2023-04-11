/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './src/redux/store';
import {Provider} from 'react-redux';

export default function Main() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
