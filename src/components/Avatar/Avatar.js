import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Avatar = ({username}) => {
  const initial = username
    ? username.charAt(0).toUpperCase() + username.charAt(1).toUpperCase()
    : '?';

  return (
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{initial}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 24,
  },
});

export default Avatar;
