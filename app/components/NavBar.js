
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import { View, Text, Dimensions } from "react-native";
import SPACING from '../config/SPACING';
import colors from '../config/colors';
import { FONTS, SHADOWS } from '../config';


const { width } = Dimensions.get("window");

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreens/HomeScreen';
import Check from '../screens/Check';
import Setting from '../screens/Setting';


import HomeIcon from '../../assets/Navbar/HomeIcon';
import CheckIcon from '../../assets/Navbar/CheckIcon'
import SettingIcon from '../../assets/Navbar/SettingIcon';


const Tab = createBottomTabNavigator();

const NavBar = () => {


  return (

    <Tab.Navigator

      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: SPACING,
          left: SPACING * 2,
          right: SPACING * 2,
          backgroundColor: colors.dark,
          borderRadius: SPACING * 3,
          borderTopColor: colors.dark,
          height: SPACING * 8,
          ...SHADOWS.dark,
        }
      }}
    >
      <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            colors={focused ? [colors.lightPurple, colors.lightOrange] : [colors.dark, colors.dark]}
            style={{
              width: SPACING * 5.5,
              height: SPACING * 5.5,
              borderRadius: SPACING * 2.5,
              justifyContent: "center",
              alignItems: "center"
            }}>
            <HomeIcon color={focused ? colors.dark : colors.lightOrange} />
          </LinearGradient>
        )
      }} />

      <Tab.Screen name='Check' component={Check} options={{
        tabBarIcon: ({ focused }) => (
          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            colors={focused ? [colors.lightPurple, colors.lightOrange] : [colors.dark, colors.dark]}
            style={{
              width: SPACING * 5.5,
              height: SPACING * 5.5,
              borderRadius: SPACING * 2.5,
              justifyContent: "center",
              alignItems: "center"
            }}>
            <CheckIcon color={focused ? colors.dark : colors.lightOrange} />
          </LinearGradient>
        )
      }} />

      <Tab.Screen name='Setting' component={Setting} options={{
        tabBarIcon: ({ focused }) => (
          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            colors={focused ? [colors.lightPurple, colors.lightOrange] : [colors.dark, colors.dark]}
            style={{
              width: SPACING * 5.5,
              height: SPACING * 5.5,
              borderRadius: SPACING * 2.5,
              justifyContent: "center",
              alignItems: "center"
            }}>
            <SettingIcon color={focused ? colors.dark : colors.lightOrange} />
          </LinearGradient>
        )
      }} />


    </Tab.Navigator >

  )
}

export default NavBar;

/* <View style={{
      width: SPACING * 5.5,
      height: SPACING * 5.5,
      borderRadius: SPACING * 2,
      backgroundColor: colors.lightBlue,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Home color={colors.dark} />
    </View> */


// import { BlurView } from 'expo-blur';
// import { Ionicons } from '@expo/vector-icons';
// import { SvgUri } from 'react-native-svg';

// import React from 'react'
// import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
// import SPACING from '../config/SPACING';
// import colors from '../config/colors';

// const { width } = Dimensions.get("window");

// import Home from '../../assets/Navbar/Home';
// import User from '../../assets/Navbar/User';
// import Setting from '../../assets/Navbar/Setting';
// import Tag from '../../assets/Navbar/Tag';
// import Shopping from '../../assets/Navbar/Shopping';


// export const NavBar = () => {
//   return (
//     <View style={{
//       width: width,
//       height: SPACING * 10,
//       alignItems: "center",
//       justifyContent: "center",
//       backgroundColor: colors.dark,
//       elevation: 25,
//     }}>
//       <BlurView style={{
//         width: "90%",
//         height: "90%",
//         borderRadius: SPACING * 2,
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//       }}
//         tint="light"
//         intensity={12}
//       >
//         <View style={{
//           width: SPACING * 5.5,
//           height: SPACING * 5.5,
//           borderRadius: SPACING * 2,
//           backgroundColor: colors.lightBlue,
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//           <Home color={colors.dark} />
//         </View>

//         <View style={{
//           width: SPACING * 5.5,
//           height: SPACING * 5.5,
//           borderRadius: SPACING * 2,
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//           <User />
//         </View>

//         <View style={{
//           width: SPACING * 5.5,
//           height: SPACING * 5.5,
//           borderRadius: SPACING * 2,
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//           <Setting />
//         </View>

//         <View style={{
//           width: SPACING * 5.5,
//           height: SPACING * 5.5,
//           borderRadius: SPACING * 2,
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//           <Tag />
//         </View>

//         <View style={{
//           width: SPACING * 5.5,
//           height: SPACING * 5.5,
//           borderRadius: SPACING * 2,
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//           <Shopping />
//         </View>

//       </BlurView>
//     </View>
//   )
// }
