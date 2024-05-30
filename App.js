import React from 'react';
import {Button, Text, View, SafeAreaView, StyleSheet} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
// import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      <ForgetPasswordScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FCFB',
  },
});
export default App;
