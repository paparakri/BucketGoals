import React, { Component } from "react";
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import { userControls } from '../../auth';

class Home extends Component{

  controls = new userControls;

  logOut() {
    console.log('Entered LogOut');
    this.controls.logOut();
  }

  render(){
    return (
      <View>
          <Text>Entered Home Screen</Text>
          <TouchableOpacity
              style={styles.button}
              onPress={this.logOut.bind(this)}
          >
              <Text style={styles.text2}>Log Out</Text>
          </TouchableOpacity>
      </View>
    );
  }

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
      marginTop: 40
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
      marginBottom: 80,
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

export default Home;