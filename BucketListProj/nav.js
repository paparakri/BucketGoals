import React from "react";
import { NativeBaseProvider, Button } from 'native-base';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/screens/SignUp'
import Login from './src/screens/Login'
import Splash from './src/screens/SplashScreen'
import Home from './src/screens/Home';
import CardComponent from "./src/screens/BucketList";
import { userControls } from "./auth";

const headerStyle = {
    backgroundColor: '#151f28'
};

const Stack = createNativeStackNavigator();

export const SignedOut = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splash' component={Splash}
                    options={{
                        title: 'Bucket Goals',
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


const Tab = createBottomTabNavigator();
const controls = new userControls;

export const SignedIn = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{
                    headerRight: () => (
                        <NativeBaseProvider>
                            <Button
                            style={styles.button}
                            size="sm"
                            variant="subtle"
                            colorScheme="primary"
                            onPress={() => controls.logOut()}>
                                <Text style={{alignSelf: 'center', fontSize: 14, color: '#06B6D4'}}>Log Out</Text>
                            </Button>
                        </NativeBaseProvider>
                    ),
                    title: 'Bucket Goals'
                }} />
                <Tab.Screen name="Bucket List" component={CardComponent} options={{
                    headerRight: () => (
                        <NativeBaseProvider>
                            <Button
                            style={styles.button}
                            size="sm"
                            variant="subtle"
                            colorScheme="primary"
                            onPress={() => controls.logOut()}>
                                <Text style={{alignSelf: 'center', fontSize: 14, color: '#06B6D4'}}>Log Out</Text>
                            </Button>
                        </NativeBaseProvider>
                    ),
                    title: 'Bucket Goals'
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 50,
        borderRadius: 100,
        justifyContent: "center",
        marginRight: 10,
        marginTop: 3.5
    }
});