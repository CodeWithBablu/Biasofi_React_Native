import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from "expo-font";

// import { Provider } from 'react-redux';
// import { store } from './store';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/screens/Home';
import WebViewScreen from './app/screens/HomeScreens/webViewScreen';

import colors from './app/config/colors';

const Stack = createNativeStackNavigator();


export default function App() {



  const [loaded] = useFonts({
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    BlmelodyBold: require("./assets/fonts/BLMelody-Bold.otf"),
    BlmelodyMedium: require("./assets/fonts/BLMelody-Medium.otf"),
    BlmelodyRegular: require("./assets/fonts/BLMelody-Regular.otf"),
    BlmelodySemiBold: require("./assets/fonts/BLMelody-SemiBold.otf"),
    DynapuffBold: require("./assets/fonts/DynaPuff-Bold.ttf"),
    DynapuffMedium: require("./assets/fonts/DynaPuff-Medium.ttf"),
    DynapuffSemiBold: require("./assets/fonts/DynaPuff-SemiBold.ttf"),
    DynapuffRegular: require("./assets/fonts/DynaPuff-Regular.ttf"),

  });

  if (!loaded) return null;

  return (
    // <Provider store={store}>
    <NavigationContainer>
      <StatusBar backgroundColor={colors.dark} style="light" />
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
