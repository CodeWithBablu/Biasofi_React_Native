import { StyleSheet, Text, Button, TextInput, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { FONTS } from "../config";




const SearchField = () => {

  const navigation = useNavigation();

  const [articleUrl, setArticleUrl] = useState(null);

  const onTextChange = (text) => {
    setArticleUrl(text);
  }

  return (
    <View>

      <View style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
      }}>

        <BlurView style={{
          borderRadius: SPACING,
          flex: 1,
          flexDirection: "row",
          paddingVertical: SPACING / 2,
          marginRight: SPACING * 2,
          alignItems: "center",
        }}
          intensity={50}>
          <TextInput style={{
            color: colors.white,
            fontSize: SPACING * 1.7,
            padding: SPACING,
            paddingLeft: SPACING * 5,
          }}
            placeholder={"News article url..."}
            placeholderTextColor={colors.indigo[200]}
            name="articleUrl"
            onChangeText={(text) => onTextChange(text)}
          />

          <Ionicons
            name="search"
            style={{
              position: "absolute",
              left: SPACING,
            }}
            color={colors.indigo[100]}
            size={SPACING * 3}
          />

        </BlurView>

        <TouchableOpacity style={{
          backgroundColor: colors.lime[300],
          width: SPACING * 6,
          height: SPACING * 10,
          borderRadius: SPACING * 1.5,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
          onPress={() => navigation.navigate('WebViewScreen', {
            id: 1,
            URL: articleUrl,
          })}
        >

          <Text style={{ marginTop: SPACING, color: colors.gray[800], fontFamily: FONTS.bold, fontSize: SPACING * 4 }}>G</Text>
          <Text style={{ color: colors.gray[800], fontFamily: FONTS.bold, fontSize: SPACING * 4 }}>O</Text>

        </TouchableOpacity>

      </View>



    </View>
  );
};

export default SearchField;

