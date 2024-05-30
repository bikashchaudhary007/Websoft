import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ForgetPasswordScreen = () => {
  // const [username, setUsername] = useState('');
  const navigation = useNavigation();

  // Form Controller
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  //Sign In Funtion
  const onSendPressed = data => {
    console.warn(data);
    navigation.navigate('NewPassword');
  };

  // On SignUp for Don't have an account
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* Title */}
        <Text style={styles.title}>Reset Your Password</Text>

        {/* Username */}
        <CustomInput
          name="username"
          placeholder="Enter your confirmation code"
          control={control}
          rules={{required: 'Username is required'}}
        />

        {/* Button Send */}
        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

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
