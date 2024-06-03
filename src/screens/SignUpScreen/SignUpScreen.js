import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {createUserWithEmailAndPassword} from 'firebase/auth';
// import {auth} from '../../../firebaseconfig/firebase';
import {auth, db} from '../../../firebaseconfig/firebase'; // Import Firestore
import {setDoc, doc} from 'firebase/firestore'; // Firestore functions
import Toast from 'react-native-toast-message';

// Rex Exp For Email Validation
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  // Form Controller
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();
  // Watching the value of password for confirm password
  const pwd = watch('password');

  const navigation = useNavigation();

  // Sign Up Function
  const onRegisterPressed = async data => {
    if (data.email && data.password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password,
        );
        const user = userCredential.user;

        // Save username and email to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          username: data.username,
          email: user.email,
        });

        // Navigate to Home screen
        navigation.navigate('Home');

        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Sign Up Successfully',
        });
      } catch (e) {
        console.log('SignUp Error:', e.message);
        alert(`SignUp Error: ${e.message}`);
      }
    }
  };
  /*
  const onRegisterPressed = async data => {
    // console.warn(data.password);
    if (data.email && data.password) {
      try {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        // navigation.navigate('ConfirmEmail');
        navigation.navigate('Home');
      } catch (e) {
        console.log('SignUp Error:', e.message);
        alert(`SignUp Error: ${e.message}`);
      }
    }
  };
  */

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
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />

        {/* Email */}
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}}
        />

        {/* Pasword */}
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Username should be at least 6 characters long',
            },
          }}
        />

        {/* Repeat Password */}
        <CustomInput
          name="repeat-password"
          placeholder="Repeat Password"
          control={control}
          secureTextEntry={true}
          rules={{
            validate: value => value === pwd || 'Password do not matchd',
          }}
        />

        {/* Button Login */}
        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />

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
      <Toast ref={ref => Toast.setRef(ref)} />
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
