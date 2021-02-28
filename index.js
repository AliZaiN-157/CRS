/**
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './Src/Screens/App';


const RNRedux = () => (
    <App />
)

AppRegistry.registerComponent(appName, () => RNRedux);
