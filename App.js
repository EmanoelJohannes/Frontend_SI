import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

console.ignoreYellowBox = ['Warning:'];

export default function App() {
  return (
    <> 
      <StatusBar barStyle="light-content" backgroundColor="#2c692b" />
      <Routes />
    </>
  );
}