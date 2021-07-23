import {StyleSheet, Text, View} from "react-native";
import * as React from "react";

//Hoomscreen komponenten tager en prop med og printer midt på siden
function SettingsScreen({prop}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{prop}</Text>
        </View>
    );
}

export default SettingsScreen

//Styling komponenter til siden
const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        borderColor: 'yellow',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%'
    },
    text: {
        fontSize: 20,
    },
});
