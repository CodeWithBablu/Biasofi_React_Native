import React, { useState } from 'react'
import { SafeAreaView, Image, ScrollView, StatusBar, Text, View } from 'react-native'
import { FONTS } from '../config'
import colors from '../config/colors'
import SPACING from '../config/SPACING'

import { WebView } from 'react-native-webview';

import SearchFeild from "../components/SearchField";


const checkGif = require("../../assets/check.gif");

const Check = () => {


  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.dark,
    }}>
      <SafeAreaView style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}>

        <View style={{
          flexDirection: "column",
          padding: SPACING,
        }}>

          <Text style={{
            color: colors.gray[200],
            fontFamily: FONTS.dynapuffMedium,
            marginTop: SPACING * 5,
            fontSize: SPACING * 3,
          }}>Enter the url to the news</Text>

          <Text style={{
            color: colors.orange[200],
            fontFamily: FONTS.dynapuffSemiBold,
            fontSize: SPACING * 4.5,
          }}>Article{' '}🧐️</Text>

          <Image
            style={{
              width: "100%",
              alignSelf: "center",
              borderRadius: SPACING * 4,
              width: SPACING * 25,
              height: SPACING * 25,
            }}
            source={checkGif}
          />

          <SearchFeild />

          <View style={{
            width: "90%",
            alignSelf: "center",
            padding: SPACING,
            borderRadius: SPACING,
            flexWrap: "wrap",
            flexDirection: "row",
            marginTop: SPACING * 4,
            backgroundColor: colors.blueGray[100],
          }}>
            <Text style={{ color: colors.rose[500], fontFamily: FONTS.semiBold, fontSize: SPACING * 2, marginRight: SPACING }}>Note:</Text>
            <Text style={{ color: colors.gray[700], fontFamily: FONTS.bold, fontSize: SPACING * 2, }}>
              Right now only political news article are supported!</Text>
          </View>
        </View>

      </SafeAreaView>
    </View>
  )
}

export default Check