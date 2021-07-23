import {StyleSheet, Text, View} from "react-native";
import * as React from "react";

//Hoomscreen komponenten tager en prop med og printer midt på siden
function HomeScreen({prop}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{prop}</Text>
        </View>
    );
}

export default HomeScreen

//Styling komponenter til siden
const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
});