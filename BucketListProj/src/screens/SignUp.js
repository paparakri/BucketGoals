import React from 'react';
import {View, StatusBar, Text, StyleSheet} from 'react-native';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
    </View>
  );
};

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
});

export default SignUp;