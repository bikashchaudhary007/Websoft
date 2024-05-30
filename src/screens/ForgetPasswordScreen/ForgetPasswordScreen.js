import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const ForgetPasswordScreen = () => {
  const [username, setUsername] = useState('');

  //Sign In Funtion
  const onSendPressed = () => {
    console.warn('Send Pressed');
  };

  // On SignUp for Don't have an account
  const onSignInPressed = () => {
    console.warn('On SignIn Pressed');
  };

  //Resend Funtion
  const onResendPressed = () => {
    console.warn('Resend Pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* Title */}
        <Text style={styles.title}>Reset Your Password</Text>

        {/* Username */}
        <CustomInput
          placeholder="Enter your confirmation code"
          value={username}
          setValue={setUsername}
        />

        {/* Button Login */}
        <CustomButton text="Send" onPress={onSendPressed} />

        {/* Back To Sign In */}
        <CustomButton
          text="Back To Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

// Styling
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ForgetPasswordScreen;
