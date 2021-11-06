import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/screens/SignUp'
import Login from './src/screens/Login'
import Splash from './src/screens/SplashScreen'
import Home from './src/screens/Home';

const headerStyle = {
    backgroundColor: '#151f28',
};

const Stack = createNativeStackNavigator();

export const SignedOut = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splash' component={Splash}
                    options={{
                        title: 'Splash',
                        headerStyle: headerStyle,
                        headerTintColor: '#ffffff',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    }}
                />
                <Stack.Screen name='Sign Up' component={SignUp}
                    options={{
                        title: 'Sign Up',
                        headerStyle: headerStyle,
                        headerTintColor: '#ffffff',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    }}
                />
                <Stack.Screen name='Log In' component={Login}
                    options={{
                        title: 'Log In',
                        headerStyle: headerStyle,
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