import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
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
    </>
  );
};

export default SocialSignInButtons;
