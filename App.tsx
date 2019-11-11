/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/login'
import Registration from './src/registration'

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Registration: {screen: Registration},
});

const App = createAppContainer(MainNavigator);
export default App;
