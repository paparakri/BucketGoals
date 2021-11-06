import SyncStorage from "sync-storage";

//const data = await SyncStorage.init();

class userControls {
    constructor(){
        SyncStorage.init();
        this.key = "auth-key";
    }
    signIn(user, pass, mail) {
        SyncStorage.set('User', user)
        SyncStorage.set('Pass', pass);
        SyncStorage.set('Mail', mail);
        SyncStorage.set(this.key, 'true');
        console.log("Saved Info");
        console.log(SyncStorage.getAllKeys());
    }
    logOut(){
        SyncStorage.remove('User');
        SyncStorage.remove('Pass');
        SyncStorage.remove('Mail');
        SyncStorage.remove(this.key);
    }
    enterBool(){
        console.log(SyncStorage.getAllKeys());
        return SyncStorage.get(this.key)
    }
}