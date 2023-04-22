import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";

import colors from '../../config/colors';
import SPACING from '../../config/SPACING';

import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";



import Categories from "../../components/Categories";

//Data Layer ( user )
// import { useDispatch, useSelector } from "react-redux";
// import { selectUserData, setUserData } from "../../../slices/userSlices";

import { FONTS } from "../../config";
const logo = require("../../../assets/logo.png")

const { width } = Dimensions.get("window");


const HomeScreen = ({ navigation }) => {

  // const dispatch = useDispatch(); // Redux

  // const User = useSelector(selectUserData);


  const [activeCategoryId, setActiveCategoryId] = useState(0);


  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.dark,
    }}>
      <SafeAreaView style={{
        marginTop: StatusBar.currentHeight,
        marginBottom: SPACING * 10,
        backgroundColor: colors.dark,
      }}>
        <ScrollView style={{
          padding: SPACING,
        }}>

          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}>

            <TouchableOpacity style={{
            }}>
              <View style={{
                flexDirection: "row",
                alignItems: "center"
              }}>

                <Text style={{
                  fontSize: SPACING * 3,
                  fontFamily: FONTS.bold,
                  color: colors.contrast.white,
                }}>
                  /
                </Text>
                <Text style={{
                  fontSize: SPACING * 3,
                  fontFamily: FONTS.dynapuffMedium,
                  color: colors.green[100],
                }}>
                  Bi
                  <Text style={{
                    fontSize: SPACING * 3,
                    fontFamily: FONTS.dynapuffMedium,
                    color: colors.contrast.white,
                  }}>a</Text>
                  sofi
                </Text>
                <Text style={{
                  fontSize: SPACING * 3,
                  fontFamily: FONTS.bold,
                  color: colors.contrast.white,
                }}>
                  :
                </Text>
              </View>
            </TouchableOpacity>

            {/* //// For user login */}
            <View style={{
              flexDirection: "row",
              alignItems: "center",
            }}>

              <TouchableOpacity style={{
                width: SPACING * 5,
                height: SPACING * 5,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors["dark-light"],
                borderRadius: SPACING * 2,
              }}
              >
                <Ionicons name="person-circle-outline" size={35} style={{ color: colors["white-smoke"] }} />
              </TouchableOpacity>

            </View>

          </View>

          {/* For user Greeting */}
          <View style={{
            width: "80%",
            flexDirection: "row",
            alignItems: "baseline",
            marginVertical: SPACING * 3,
          }}>
            <Text style={{
              color: colors.pureWhite,
              fontSize: SPACING * 3,
              fontFamily: FONTS.semiBold,
              fontWeight: "600",
              marginRight: SPACING,
            }}>
              hey!
            </Text>
            <Text style={{
              color: colors.indigo[200],
              fontSize: SPACING * 3.5,
              fontFamily: FONTS.bold,
              fontWeight: "600",
            }}>
              Rollex✨️ {' '}
            </Text>
          </View>

          <Text style={{ color: colors.amber[100], fontSize: SPACING * 2, fontFamily: FONTS.bold }}>Top headlines</Text>

          <Text style={{ color: colors.rose[100], fontSize: SPACING * 2, fontFamily: FONTS.bold }}>Categories</Text>

          <Categories onChange={(id) => setActiveCategoryId(id)} />

          {/* show news article based on category */}
          {

          }

        </ScrollView>
      </SafeAreaView >
    </View >

  );
};

export default HomeScreen;

