import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './src/navigations/MainNavigation';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App(){
  return <MainNavigation />
}
