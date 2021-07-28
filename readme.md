<h1> Øvelsesvejledning til øvelse 2 - Navigation </h1>

<h2> Part One - Tab Navigator</h2>
1.   Start med at oprette et nyt projekt. 
2.  Installér følgende dependencies;
    - @react-navigation/bottom-tabs
    - @react-navigation/bottom-tabs
    - @react-navigation/native
    - @react-navigation/stack
    - react-native-gesture-handler
    - react-native-safe-area-context
    - react-native-screens
    - react-native-vector-icons 
        - Et skærmklip af package.json filen til den endelige løsning er vedlagt i bilag A.
          Din package.json bør være ens med denne efter installeringen. 
        - KOPIER linjen herunder til installering.

   
        npm install --save @react-navigation/bottom-tabs @react-navigation/bottom-tabs @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-safe-area-context react-native-screens react-native-vector-icons

3. Opret en mappe og døb denne 'components'
4. I mappen oprettes tre filer, der kaldes;<br/> 'HomeScreen', 'SettingsScreen' & 'DetailsScreen'
    - Opret i hver mappe en tekstkomponent med selvvalgt indhold
5. Gå nu ind i app.json filen og importer de nyopretterede filer. 
6. Inden vi opretter en tabnavigator, skal vi omskrive App.js fra at være en klassekomponent til at være en funktionel komponent.  
7. Nu er vi klar til at konstruere en bottomTabnavigator. 
   - Opret først en const, der kaldes 'Tab' og sæt denne ligmed 'createBottomTabNavigator()'
        - HUSK: createBottomTabNavigator() bør automatisk blive importeret. Er dette ikke tilfældet skal metoden importeres fra @react-navigation/bottom-tab
    - I App komponenten operettes der i det eksisterende return-statement en NavigationContainer, hvori en Navigator komponent oprettes. En Navigator komponent oprettes ved at kalde Navigator på Tab variablen - Tab.Navigator
        - Sidder du fast, er strukturen vedlagt i bilag B.
        - Derudover er der god hjælp i Expo's dokumentation, der kan findes på følgende link:
          https://reactnavigation.org/docs/tab-based-navigation/
    - Endeligt færdiggøres Tabnavigatoren ved at oprette tre Tab.Screen komponenter i den netop oprettede Tab.Navigator. 
        - Hver enkelt Tab.Screen komponent har to properties; 'name' & 'component'. 
            - name: angiver en reference på den komponent, der kobles på den enkelte screen. Selve navgivning er vilkår og bestemmes af dig som udvikler 
            - component: Her placeres de importerede for til den enkelte screens komponent.
                - HINT: Igen, hvis du går i stå, så ta' et kig på dokumentationen, der kan findes på det førnævnte link.
    <h3>Tjek af fremskridt</h3>
    - Afprøv nu din app. Efter opstart af app'en, bør du nu have en tab navigator med tre tabs. 
    - Ved klik på en tab, bør du kunne navigere mellem de forskellige screens; HomeScreen, SettingsScreen og DetailsScreen. 
    - Spiller det? Cool, så kør videre ned og prøv kræfter med Stack navigatoren

<h2>Part two - Stack Navigator </h2>  
1. Opret i components en ny fil, der kaldes 'StackNavigator'. Derudover skal der i components mappen oprettes en ny mappe, der kaldes 'StackComponents'. I denne mappe, skal der oprettes to nye filer med vilkårligt navn. 
2. Gå nu ind i StackNAvigator filen og omskriv klassekomponenten til en funktionel komponent, som gjort tidligere. 
3. Opret en const, der kaldes 'Stack'. Denne skal være en instans af createStackNavigator(), der bør blive importeret automatisk.
    - Dette er samme fremgangsmåde, som den der blev gennemført i punkt 7.
    - I return-statementet skal der oprettes en komponent ved at kalde Navigator på den nyoprettede Stack: <Stack.Navigator></Stack.Navigator>
    - Opret nu tre Stack.Screen komponenter i Stack.Navigatoren. Hver af de tre Stack.Screen Komponenter indeholder igen properties i form af name og component, der har samme betydning, som tidligere beskrevet.
    - De komponenter der skal refereres til i StackNavigatoren er henholdsvis, de tro screens i stackComponents-mappen og DetailsScreen.
4. Nu er StackNavigatoren færdigkonstrueret, hvorfor du nu skal vende tibage til App.js
    - Heri skal du importere din StackNavigator og gå ned til den Tab.Screen som referer til Detailskomponenten. Erstat nu referencen til Detailskomponenten med den importerede StackNavigator.
    - Opdater dernæst name-feltet med et sigende navn for StackNavigatoren.
    - Herved er StackNavigatoren og Tabnavigatoren bundet sammen.
        - HINT: Sidder du fast eller har udfordringer, så ta' et kig på dokumentationen: https://reactnavigation.org/docs/stack-navigator/
 5. Gå nu ind i Detailskomponenten. 
    - Details Komponenten skal tage 'navigation med som argument'
    - Opret nu to button-komponenter i return()
    - Dernæst skal der oprettes en metode til at styre navigationen til de komponenter i stackComponents-mappen. Lav derfor en metode, der kaldes 'navController'
    - Metoden skal have to argumenter, disse er; navigation & en string, der referer til rutenavnet
    - på navigation argumentet kaldes den prædefinerede navigate metode, der tager indeholder rutenavnet som argument.
    - Nu skal der blot oprettes en onPress-evenhandler på de to button-komponenter, der aktiverer den nyoprettede metode, hvori de førnævnte argumenter medsendes
        - HUSK: Det rutenavn, der tilføjes til metoden, skal passe med de rutenavne der blev angivet i Stack.Screen komponenterne.
 6. Endeligt skal navigationen i de to komponenter, der er placeret i stackComponents idriftsættes.
   - Naviger derfor til den ene fil.
   - Komponenten skal tage 'navigation' med som argument, som vist tidligere i Detailskomponenten.
- I return() Oprettes nu to button komponenter, ligesom i Detailskomponenten.
   - Den ene button komponent skal i onPress aktivere navigation.goBack - Dette er en tilbage knap. 
   - Den anden button komponent skal kalde navigation.navigate('Rutenavnet på den anden screen i stackComponents') 
   - Nu er du færdig og er klar til at afprøve din app. 
 <h3>Er opgaven løst?</h3>
    - Start nu din app igen. Du bør nu være i stand til at navigere mellem tre tabs i bunden af din skærm. 
    - Den ene tab bør føre dig ind til din Stack navigator, der i udgangspunktet viser Details komponenten. I denne screen bør der være to knapper, der vil navigere til de to screens i stackComponents
    - I hver af de to screens, skal der ligeledes være to knapper, hvoraf den ene sender dig retur til den screen du kom fra, hvortil den anden sender dig til anden screen i stackComponents. 

<h2>Videre arbejde - inspiration</h2>
- Placer ikoner på alle tabs
    - PLUS: Lav den valgte tab, så den har en anden farve, end resterende.
    - HINT: Der er RIGTIG GOD hjælp at hente i dokumentationen nævnt i punkt 7 under konstruktionen af Tabnavigatoren
- Lav to tekststrenge til HomeScreen & DetailsScreen, som overføres til komponenternes Tekstkomponenter og fremvises. 
  - HINT: Rigtig god at hjælpe i følgende link: https://stackoverflow.com/questions/60439210/how-to-pass-props-to-screen-component-with-a-tab-navigator
- Bestem placering af Headerteksten vist i Stacknavigatoren, 'center', 'left' & 'right' 
    - HINT: God hjælp at hente i dokumentationen, der er nævnt i punkt 4 under konstruktionen af StackNavigatoren(kig efter options). 

<h2>Bilag</h2>


<h3>Bilag A - Package.json - fra endelig løsning </h3>
![img.png](img.png)

<h3>Bilag B - Bottom Tab struktur </h3>
![img_1.png](img_1.png)![img.png](img.png)







    
    

