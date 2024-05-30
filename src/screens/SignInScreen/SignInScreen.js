import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/wsnitlogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Sign In Funtion
  const onSignInPressed = () => {
    console.warn('Sign In');
  };

  //Forget Password Funtion
  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };

  //Sign With Facebook
  const onSignInFacebook = () => {
    console.warn('Sign With Facebook');
  };

  //Sign With Goolge
  const onSignInGoogle = () => {
    console.warn('Sign With Google');
  };

  //Sign With Apple
  const onSignInApple = () => {
    console.warn('Sign With Apple');
  };

  // On SignUp for Don't have an account
  const onSignUpPressed = () => {
    console.warn('On SignUp Pressed');
  };
  // creating the height
  const {height} = useWindowDimensions();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* Login */}
        <Image
          source={Logo}
          style={(styles.logo, {height: height * 0.3})}
          resizeMode="contain"
        />

        {/* Username */}
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        {/* Pasword */}
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        {/* Button Login */}
        <CustomButton text="Login" onPress={onSignInPressed} />

        {/* Forget Password */}
        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        {/* Sign In with Facebook */}
        <CustomButton
          text="Sign In With FaceBook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        {/* Sign In with Google */}
        <CustomButton
          text="Sign In With Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        {/* Sign In with Facebook */}
        <CustomButton
          text="Sign In With Apple"
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />

        {/* Don't Have an account */}
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
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
});

export default SignInScreen;
