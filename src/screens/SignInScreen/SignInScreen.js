import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/wsnitlogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const SignInScreen = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // Form Controller
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  //Sign In Funtion
  const onSignInPressed = data => {
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
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        {/* Pasword */}
        <CustomInput
          name="Password"
          control={control}
          placeholder="Password"
          secureTextEntry={true}
          rules={{required: 'Password is required'}}
        />

        {/* Button Login */}
        <CustomButton text="Login" onPress={handleSubmit(onSignInPressed)} />

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
