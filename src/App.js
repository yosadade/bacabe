import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const App = () => {
  const entireScreenWidth = Dimensions.get('window').width;
  EStyleSheet.build({$rem: entireScreenWidth / 320});
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
