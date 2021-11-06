import React, { Component, useState } from 'react';
import { Keyboard, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput, Button, View, Text, StyleSheet, StatusBar } from 'react-native';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      user: '',
      pass: ''
    }
  }

  onLogin(){
    console.log('Entered onLogin');
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.rect}>
        <StatusBar hidden />
        <View style={styles.mainColumn}>
          <Image
            style={styles.logo}
            source={require("../img/cover.png")}
          />
          <View style={styles.username}>
            <TextInput
              placeholder="Username"
              onChangeText={username => this.setState({ user: username })}
              defaultValue={this.user}
              placeholderTextColor="rgba(255,255,255,1)"
              secureTextEntry={false}
              style={styles.input}
            />
          </View>
          <View style={styles.pass}>
            <TextInput
              placeholder="Password"
              onChangeText={password => this.setState({ pass: password })}
              defaultValue={this.pass}
              placeholderTextColor="rgba(255,255,255,1)"
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onLogin}
          >
            <Text style={styles.text2}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  button: {
    height: 50,
    alignSelf:"center",
    width: 130,
    backgroundColor: "rgba(29,161,242,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 60
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    alignSelf: "center"
  },
  logo: {
    marginTop: 30,
    marginBottom: 60,
    alignSelf: "center",
    maxWidth: 380,
    maxHeight: 90
  },
  pass: {
    marginTop: 20,
    height: 59,
    backgroundColor: "rgba(251,247,247,0.07)",
    borderRadius: 5,
    flexDirection: "row"
  },
  username: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.07)",
    borderRadius: 5,
    flexDirection: "row"
  },
  mainColumn: {
    marginTop: 33,
    marginLeft: 31,
    marginRight: 31
  },
  input: {
    height: 40,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 10
  },
  rect2: {
    height: 39,
    marginBottom: 45,
    marginLeft: 28,
    marginRight: 28,
    marginTop: 40
  },
  placeholders: {
    color: '#fff'
  }
});


export default Login;