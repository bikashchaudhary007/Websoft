import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  // Form Controller
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  //Sign In Funtion
  const onConfirmPressed = data => {
    console.warn(data);
    navigation.navigate('Home');
  };

  // On SignUp for Don't have an account
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  //Resend Funtion
  const onResendPressed = () => {
    console.warn('Resend Pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* Title */}
        <Text style={styles.title}>Confirm Your Email</Text>

        {/* Code */}
        <CustomInput
          name="Code"
          placeholder="Enter your confirmation code"
          control={control}
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        {/* Button Login */}
        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        {/* Reset*/}
        <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          type="SECONDARY"
        />

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

export default ConfirmEmailScreen;
