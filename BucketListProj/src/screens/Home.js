import React from "react";
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native'
import { logout } from "../../auth";

const Home = () => {
    
    return (
        <View>
            <Text>Entered Home Screen</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={logout}
            >
                <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        alignSelf:"center",
        width: 130,
        backgroundColor: "rgba(29,161,242,1)",
        borderRadius: 100,
        justifyContent: "center",
        marginTop: 60
      }
});

export default Home;