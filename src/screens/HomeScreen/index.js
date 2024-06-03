import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '../../components/CustomButton';
import {signOut, onAuthStateChanged} from 'firebase/auth';
import {auth, db} from '../../../firebaseconfig/firebase';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Avatar from '../../components/Avatar/Avatar';
import {doc, getDoc} from 'firebase/firestore';

const Index = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState({});
  const navigation = useNavigation();
  const handleLogout = async () => {
    await signOut(auth);
    navigation.navigate('SignIn');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        setCurrentUser(user);
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
            Toast.show({
              type: 'success',
              text1: 'Success',
              text2: 'Successfully Signed In',
            });
          } else {
            Toast.show({
              type: 'error',
              text1: 'Error',
              text2: 'User data not found',
            });
          }
        } catch (error) {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Failed to fetch user data',
          });
        }
      } else {
        setCurrentUser(null);
        setUserData({});
      }
    });

    return () => unsubscribe(); // Cleanup the observer on unmount
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text style={styles.text}>Home, Sweet Home</Text>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {currentUser && (
          <View>
            <Avatar username={userData.username} />
            {/* <Avatar username={currentUser.email} /> */}
            <Text style={styles.subText}>User ID: {userData.username}</Text>
            <Text style={styles.subText}>User ID: {currentUser.uid}</Text>
            <Text style={styles.subText}>Welcome, {currentUser.email}</Text>
          </View>
        )}
      </View>

      {/* Logout */}
      <CustomButton text="Logout" onPress={handleLogout} />
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'green',
    fontSize: 24,
    alignSelf: 'center',
  },
  subText: {
    color: 'green',
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Index;
