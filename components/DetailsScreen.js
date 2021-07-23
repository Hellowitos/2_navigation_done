import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";

//Metode til at navigere på baggrund af de argumenter, som der sendes med i metode
//Vi kalder metoden navigation op navigation, som benytter den overførte rutereferencen til at navigere.
const navController = (navigation, route) =>{
    navigation.navigate(route)
}

//Her foregår styling af Detials screen, der omfatter to button komponenter, der benytters til at aktivere vores navcontroller metode
function DetailsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>DetailsScreen!</Text>
            <Button title="Go To Screen One" onPress={() => navController(navigation, 'ScreenOne')}  />
            <Button title="Go To Screen Two" onPress={() => navController(navigation, 'ScreenTwo')}  />
        </View>
    );
}

export default DetailsScreen


//Styling komponenter til siden.
const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        borderColor: 'green',
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
