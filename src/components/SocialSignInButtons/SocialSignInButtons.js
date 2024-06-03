import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';
import Toast from 'react-native-toast-message';

const SocialSignInButtons = () => {
  //Sign With Facebook
  const onSignInFacebook = () => {
    // console.warn('Sign With Facebook');
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Sign With Facebook',
    });
  };

  //Sign With Goolge
  const onSignInGoogle = () => {
    // console.warn('Sign With Google');
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Sign With Google',
    });
  };

  //Sign With Apple
  const onSignInApple = () => {
    // console.warn('Sign With Apple');
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Sign With Apple',
    });
  };
  return (
    <>
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
      {/* Sign In with Apple */}
      <CustomButton
        text="Sign In With Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />

      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

export default SocialSignInButtons;
