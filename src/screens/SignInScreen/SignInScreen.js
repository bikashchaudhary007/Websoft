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
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Sign In Funtion
  const onSignInPressed = () => {
    //validate user

    navigation.navigate('Home');
  };

  //Forget Password Funtion
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  // On SignUp for Don't have an account
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };
  // creating the height
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
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

        <SocialSignInButtons />

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
