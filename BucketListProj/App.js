import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/screens/SignUp'
import Login from './src/screens/Login'
import Splash from './src/screens/SplashScreen'
import Home from './src/screens/Home'
import { isSignedIn } from './auth';

const Stack = createNativeStackNavigator();

class TopComponent extends Component {
  state = false;

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    }
  }

  componentDidMount(){
    isSignedIn().then(res => this.setState({signedIn: res, checkedSignIn: true}))
    .catch(err => alert("An error occured"));
  }
  render(){
    const {checkedSignIn, signedIn} = this.state;
    if(!checkedSignIn) return null;
    if(signedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash"
          component={Splash}
          options={{
            title:'Welcome',
            headerStyle: {
              backgroundColor: '#151f28',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
          <Stack.Screen name="SignUp"
            component={SignUp}
            options={{
              title: 'Sign Up',
              headerStyle: {
                backgroundColor: '#151f28'
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen name="Login"
            component={Login}
            options={{
              title: 'Login',
              headerStyle: {
                backgroundColor: '#151f28'
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
    }
  }
}

export default TopComponent;