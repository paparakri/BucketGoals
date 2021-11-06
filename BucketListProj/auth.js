import AsyncStorage from "@react-native-async-storage/async-storage";


export class userControls {
    constructor(){
        this.key = "auth-key";
    }

    async signIn(user, pass, mail) {
        await AsyncStorage.setItem('User', user)
        await AsyncStorage.setItem('Pass', pass);
        await AsyncStorage.setItem('Mail', mail);
        await AsyncStorage.setItem(this.key, 'true');
        console.log("Saved Info");
        const keys = await AsyncStorage.getAllKeys();
        console.log(keys);
    }

    async logOut(){
        await AsyncStorage.removeItem('User');
        await AsyncStorage.removeItem('Pass');
        await AsyncStorage.removeItem('Mail');
        await AsyncStorage.removeItem(this.key);
    }
    
    async enterBool(){
        const keys = await AsyncStorage.getAllKeys();
        const data = await AsyncStorage.getItem(this.key);
        return data;
    }
}