
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import InitializeStack from "./components/StackNavigator";

//Her oprettes en instans af tabnavigator
const Tab = createBottomTabNavigator();

//Her oprettes de tre tekst referencer, der skal benyttes i vores screen komponenter
const homeScreenText = "Dette er HomeScreen!"
const settingsScreenText = "Dette er SettingsScreen!"
const detailsScreenText = "Dette er DetailsScreen!"

/*Oprettelse af root komponent
* Her oprettes først en Navigationscontainerkomponent, der står for at håndtere state-ændringer & deep linking
* Ydeligere info om denne komponent kan findes i følgende link: https://reactnavigation.org/docs/navigation-container/
*
* Dernæst kaldes Navigator, der styrer navigationen mellem de forskellige tabs.
* I Tab navigatoren kaldes en funktionen i screenOptions-egenskaben, der har til formål at bestemme den aktuelle rute.
* Pba. af ruten styles den akutelle tab ved at benytte de importerede ikoner og style disse ud fra en størrelse og farve,
* der er fastsat nederst i tabBaroptions.
*
* Afslutningsvis angives de screen komponenter, vi ønsker at fremvise for hver tab. Komponenterne har vi importeret fra vores
* componentsfolder. Hver komponent fremvises ved brug af funktion der returnerer de komponenter vi har defineret til vores tabNavigator
* Hver komponent indeholder en reference til den tekst, som skal præsenteres i komponenten. Dertil er der skabt en nested Stacknavigator, som placeres i vores "details" tab.
*
* */
 function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                if (route.name === 'Home') {
                    return (
                        <Ionicons
                            name={'home-outline'}
                            size={size}
                            color={color}
                        />
                    );
                } else if (route.name === 'Settings') {
                    return (
                        <Ionicons
                            name='md-settings-outline'
                            size={size}
                            color={color}
                        />
                    );
                }
                else{
                    return (
                <Ionicons
                    name='md-list-outline'
                    size={size}
                    color={color}
                />
            );
                }
            },
        })}
                       tabBarOptions={{
                           activeTintColor: 'blue',
                           inactiveTintColor: 'gray',
                       }}
         >
          <Tab.Screen name="Settings" children={()=><SettingsScreen prop={settingsScreenText}/>} />
            <Tab.Screen name="Home" children={()=><HomeScreen prop={homeScreenText}/>} />
          <Tab.Screen name="Details" component={InitializeStack} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App