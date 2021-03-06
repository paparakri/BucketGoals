import React, { Component } from 'react';
import {Keyboard, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Image, View, StatusBar, Text, StyleSheet, TextInput} from 'react-native';
import { userControls } from '../../auth';


class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      fullName: '',
      user: '',
      pass: '',
      mail: ''
    }
  }

  controls = new userControls;
  onSignUp(){
    console.log('Signed Up');
    this.controls.signIn(this.state.user, this.state.pass)
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior='position' style={styles.rect}>
          <StatusBar hidden />
          <View style={styles.mainColumn}>
            <Image
              style={styles.logo}
              source={require("../img/cover.png")}
            />
            <View style={styles.input}>
              <TextInput
                placeholder="Full Name"
                onChangeText={name => this.setState({ fullName: name })}
                defaultValue={this.state.fullName}
                placeholderTextColor="rgba(255,255,255,1)"
                secureTextEntry={false}
                style={styles.textInput}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="Username"
                onChangeText={username => this.setState({ user: username })}
                defaultValue={this.state.user}
                placeholderTextColor="rgba(255,255,255,1)"
                secureTextEntry={false}
                style={styles.textInput}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="e-Mail"
                onChangeText={email => this.setState({ mail: email })}
                defaultValue={this.state.mail}
                placeholderTextColor="rgba(255,255,255,1)"
                secureTextEntry={false}
                style={styles.textInput}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="Password"
                onChangeText={password => this.setState({ pass: password })}
                defaultValue={this.state.pass}
                placeholderTextColor="rgba(255,255,255,1)"
                secureTextEntry={true}
                style={styles.textInput}
              />
            </View>
            <TouchableOpacity
              onPress={this.onSignUp.bind(this)}
              style={styles.button}
            >
              <Text style={styles.text2}>Create account</Text>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
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
    width: 230,
    backgroundColor: "rgba(29,161,242,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 30
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    alignSelf: "center"
  },
  logo: {
    marginTop: 20,
    marginBottom: 40,
    alignSelf: "center",
    maxWidth: 380,
    maxHeight: 90
  },
  input: {
    height: 59,
    marginTop: 15,
    backgroundColor: "rgba(251,247,247,0.07)",
    borderRadius: 5,
    flexDirection: "row"
  },
  mainColumn: {
    marginTop: 33,
    marginLeft: 31,
    marginRight: 31
  },
  textInput: {
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

export default SignUp;