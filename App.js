import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './application/components/AppButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppButton
          bgColor="rgba(252, 197, 0, 1)"
          title="Login"
          action={() => console.log(1)}
          iconName="sign-in"
          iconSize={32}
          iconColor="#fff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
