import * as React from "react";
import { enableScreens } from 'react-native-screens';
import ScreenOne from "./stackComponents/ScreenOne";
import ScreenTwo from "./stackComponents/ScreenTwo";
import DetailsScreen from "./DetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';


enableScreens()
const Stack = createStackNavigator()


function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="DetailsScreen"
        >
            <Stack.Screen name="DetailsScreen" component={DetailsScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {color: 'white'},
                    headerStyle: {backgroundColor: '#ba6262'}}
                    }
            />
            <Stack.Screen name="ScreenOne" component={ScreenOne} options={{
                headerTitleStyle: { textAlign: 'right', color: 'white' },
                headerStyle: {backgroundColor: '#62bab5'}
            }} />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{
                headerTitleStyle: {color: 'black'},
                headerStyle: {backgroundColor: '#628bba'}
            }}
            />
        </Stack.Navigator>
    )
}

function InitializeStack({prop}) {
    console.log("prop")
    console.log(prop)
    return(
            <StackNavigator prop={prop} />
    )

}
export default InitializeStack