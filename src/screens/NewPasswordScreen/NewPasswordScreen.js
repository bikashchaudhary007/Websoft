import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  //Sign In Funtion
  const onSubmitPressed = () => {
    navigation.navigate('Home');
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

        {/* Code */}
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        {/* New Password */}
        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
        />

        {/* Button Send */}
        <CustomButton text="Submit" onPress={onSubmitPressed} />

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

export default NewPasswordScreen;
