import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, StatusBar, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { WebView } from 'react-native-webview';

import { Ionicons } from "@expo/vector-icons";

import SPACING from "../../config/SPACING";
import colors from "../../config/colors";
import { BlurView } from "expo-blur";

import CheckIcon from '../../../assets/Navbar/CheckIcon'
import { FONTS } from "../../config";


const { height, width } = Dimensions.get("window");


const WebViewScreen = ({ route, navigation }) => {


  if (route.params === undefined)
    return null;
  else {
    var { id, URL } = route.params;
  }

  const modelUrl = "https://news-bias-backend.onrender.com/article";

  const [predictedVal, setPredictedVal] = useState(-1)
  const [predictedTxt, setPredictedTxt] = useState(`Press to detect bias ${'>>>'}`)

  const handleCheckUrl = async () => {

    const data = {
      URL: URL
    }

    console.log("Pressed bias button");

    const res = await fetch(`${modelUrl}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    const output = await res.json();

    console.log(output["predicted_val"]);
    setPredictedVal(output["predicted_val"]);

  }

  useEffect(() => {
    setPredictedTxt((prev) => {
      if (predictedVal == -1)
        return `Press to detect bias ${'>>>'}`
      else if (predictedVal == 0)
        return "Biased towards AAP"
      else if (predictedVal == 1)
        return "Biased towards BJP"
      else if (predictedVal == 2)
        return "Biased towards Congress"
      else if (predictedVal == 3)
        return "News article is not biased"
      else
        return "Something went wrong"

    });
  }, [predictedVal]);


  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.dark,
    }}>

      <SafeAreaView style={{
        marginTop: StatusBar.currentHeight,
      }}>

        <View style={{
          position: "relative",
          padding: SPACING,
          height: height,
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <WebView
            style={{ width: width }}
            source={{ uri: URL }}
          />

          <View style={{
            position: "absolute",
            bottom: SPACING * 2,
            flexDirection: "row",
            alignItems: "center",
            width: "98%",
            height: SPACING * 7,
            backgroundColor: colors.black,
            borderRadius: SPACING,
          }}>

            <View style={{
              flex: 1,
              flexWrap: "wrap"
            }}>

              <Text style={[
                { width: "100%", textAlign: "center", color: colors.rose[300], fontFamily: FONTS.bold, fontSize: SPACING * 1.8, paddingHorizontal: SPACING },
                predictedVal == -1 && { fontSize: SPACING * 2, color: colors.gray[400] }

              ]}>

                {predictedTxt}

              </Text>

            </View>

            <TouchableOpacity style={{
              backgroundColor: colors.indigo[300],
              width: SPACING * 6,
              height: "100%",
              borderTopRightRadius: SPACING,
              borderBottomRightRadius: SPACING,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
              onPress={handleCheckUrl}
            >

              <CheckIcon color={colors.gray[700]} />


            </TouchableOpacity>

          </View>

        </View>

      </SafeAreaView>
    </View >
  );
};

export default WebViewScreen;

