import React from 'react';
import { Text, View } from 'react-native';
import PreLoader from './application/components/PreLoader';
import BackgroundImage from './application/components/BackgroundImage';

export default class App extends React.Component {
  render() {
    return (
      <BackgroundImage
      	source={require('./assets/images/bg.jpg')}
      />
    );
  }
}
