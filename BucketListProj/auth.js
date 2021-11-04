import AsyncStorage from "@react-native-community/async-storage";
import RNRestart from 'react-native-restart'

export const USER_KEY = "auth-demo-key";

export const onSignIn = (user, pass) => {
    AsyncStorage.setItem(USER_KEY, "true");
    AsyncStorage.setItem('username', user);
    AsyncStorage.setItem('password', pass);
    console.log('Saved User Info');
};

export const onSignOut = () => AsyncStorage.setItem(USER_KEY, "false");

export const logout = () => {
    console.log('Entered Logout');
    AsyncStorage.removeItem(USER_KEY);
    AsyncStorage.removeItem('username');
    AsyncStorage.removeItem('password');
    RNRestart.Restart();
}

export const isSignedIn = () => {
    return new Promise((resolve, reject)  => {
        AsyncStorage.getItem(USER_KEY).then(res => {
            if(res !== null){
                resolve(true);
            } else {
                resolve(false);
            }
        }).catch(err => reject(err));

    });
};