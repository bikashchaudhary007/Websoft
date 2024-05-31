import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '../../components/CustomButton';
import {signOut, onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../../firebaseconfig/firebase';
import {useNavigation} from '@react-navigation/native';

const index = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigation = useNavigation();
  const handleLogout = async () => {
    await signOut(auth);
    navigation.navigate('SignIn');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup the observer on unmount
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, Sweet Home</Text>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {currentUser && (
          <View>
            <Text style={{fontSize: 18, marginBottom: 20}}>
              User ID: {currentUser.uid}
            </Text>
            <Text style={{fontSize: 18, marginBottom: 20}}>
              Welcome, {currentUser.email}
            </Text>
          </View>
        )}
      </View>

      {/* Logout */}
      <CustomButton text="Logout" onPress={handleLogout} />
    </View>
  );
};

export default index;
