import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";

function ScreenOne({ navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen One!</Text>
            <View style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
                <View style={{margin: '2%'}} >
                    <Button title="Go Back" onPress={() => navigation.goBack() } />
                </View>
                <View style={{margin: '2%'}} >
                    <Button title="Go To Screen Two" onPress={() => navigation.navigate('ScreenTwo')}  />
                </View>
            </View>
        </View>
    );
}

export default ScreenOne


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