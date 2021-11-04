import React, { Component } from "react";
import {Image, StyleSheet, View, StatusBar, Text, TouchableOpacity} from "react-native";
import { Icon } from "react-native-vector-icons/icon";

function Splash({ navigation }) {

  
  return (
    
    <View style={styles.rect}>
      <Image
        style={styles.logo}
        source={require('../img/logo.png')}
      />
      <StatusBar hidden />
      <View style={styles.mainColumn}>
        <Text style={styles.text}>
          Find stuff you need to do before you... kick the bucket.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={styles.button}
        >
          <Text style={styles.text2}>Create account</Text>
        </TouchableOpacity>
        <View style={styles.rect2}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
        >
            <Text style={styles.text3}>Have an account already?</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    lineHeight: 50,
    textAlign: "left",
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 40
  },
  button: {
    height: 71,
    alignSelf:"center",
    width: 250,
    backgroundColor: "rgba(29,161,242,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 100
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center"
  },
  mainColumn: {
    marginTop: 5,
    marginLeft: 31,
    marginRight: 31
  },
  textColumnFiller: {
    flex: 1
  },
  rect2: {
    height: 39,
    marginBottom: 45,
    marginLeft: 28,
    marginRight: 28,
    marginTop: 20
  },
  logo: {
    marginTop: 10,
    alignSelf: "center",
    maxWidth: 130,
    maxHeight: 130
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 13
  }
});

export default Splash;