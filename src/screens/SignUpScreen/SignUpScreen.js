import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  //Sign In Funtion
  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  // On SignUp for Don't have an account
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  // On Terms and Conditions Pressed
  const onTermsOfUsePressed = () => {
    console.warn('Terms and Conditions');
  };

  const onPrivacyPressed = () => {
    console.warn('Privacy Policy');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* Title */}
        <Text style={styles.title}>Create an account</Text>

        {/* Username */}
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        {/* Email */}
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        {/* Pasword */}
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        {/* Repeat Password */}
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />

        {/* Button Login */}
        <CustomButton text="Register" onPress={onRegisterPressed} />

        {/* Terms Text */}
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        {/* Don't Have an account */}
        <CustomButton
          text="Have an account? Sign In"
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

export default SignUpScreen;
