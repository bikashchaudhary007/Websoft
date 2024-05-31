import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {signOut} from 'firebase/auth';
import {auth} from '../../../firebaseconfig/firebase';
import {useNavigation} from '@react-navigation/native';

const index = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    await signOut(auth);
    navigation.navigate('SignIn');
  };
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, Sweet Home</Text>

      {/* Logout */}
      <CustomButton text="Logout" onPress={handleLogout} />
    </View>
  );
};

export default index;
