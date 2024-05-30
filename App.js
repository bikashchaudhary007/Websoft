import React from 'react';
import {Button, Text, View, SafeAreaView, StyleSheet} from 'react-native';

import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgetPasswordScreen /> */}
      {/* <NewPasswordScreen /> */}
      <Navigation />
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
