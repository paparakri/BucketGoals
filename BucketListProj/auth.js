import AsyncStorage from "@react-native-community/async-storage";

export const USER_KEY = "auth-key";

export const signIn = (user, pass, mail) => {
    AsyncStorage.setItem('User', user);
    AsyncStorage.setItem('Pass', pass);
    AsyncStorage.setItem('Mail', mail);
    AsyncStorage.setItem(USER_KEY, 'true');
}

export const logOut = () => {
    AsyncStorage.removeItem('User');
    AsyncStorage.removeItem('Pass');
    AsyncStorage.removeItem('Mail');
    AsyncStorage.removeItem(USER_KEY);
}