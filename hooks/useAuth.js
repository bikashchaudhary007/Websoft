import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebaseconfig/firebase';

export default function useAuth() {
  const [user, setUser] = useState('');
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      console.log('Got User:', user);
      if (user) {
        setUser(user);
      } else {
        setUser('');
      }
    });
    return unsub;
  }, []);
  return user;
}
