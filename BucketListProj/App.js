import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/screens/SignUp'
import Login from './src/screens/Login'
import Splash from './src/screens/SplashScreen'

const Stack = createNativeStackNavigator();

function App() {
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

export default App;