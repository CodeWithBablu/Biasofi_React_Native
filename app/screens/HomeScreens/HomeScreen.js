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

const { width, height } = Dimensions.get("window");

import categories from "../../config/categories";
import ArticleCards from "../../components/ArticleCards";

const HomeScreen = ({ navigation }) => {

  // const dispatch = useDispatch(); // Redux

  // const User = useSelector(selectUserData);

  const [headlines, setHeadLines] = useState(null);
  const [articles, setArticles] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState(0);

  useEffect(() => {

    fetchTopHeadlines();

  }, []);

  useEffect(() => {

    fecthArticle();

  }, [activeCategoryId]);


  const fetchTopHeadlines = async () => {

    const urlHeadlines = "https://newsapi.org/v2/top-headlines?country=in&apiKey=08040abef2854d009d3b4c62f7c26dee";

    const res = await fetch(`${urlHeadlines}`, {
      method: "GET",
      mode: "cors",
    });

    var headlines = await (res.json()).then((res) => res.articles);

    setHeadLines(headlines);

  }

  const fecthArticle = async () => {

    const urlArticles = `${categories[activeCategoryId].url}`;

    const res = await fetch(`${urlArticles}`, {
      method: "GET",
      mode: "cors",
    });

    var articles = await (res.json()).then((res) => res.articles);

    // console.log(articles);
    setArticles(articles);

  }



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

          <View style={{
            width: "100%",
            height: SPACING * 2,
            borderTopRightRadius: SPACING * 2,
            borderTopWidth: SPACING / 2,
            borderColor: colors.coolGray[500],
          }}></View>

          <Text style={{ color: colors.amber[100], fontSize: SPACING * 2.2, fontFamily: FONTS.bold }}>Top headlines</Text>

          <ArticleCards articles={headlines} horizontalAlign={true} />

          <View style={{
            width: "100%",
            height: SPACING * 2,
            borderTopRightRadius: SPACING * 2,
            borderTopWidth: SPACING / 2,
            borderColor: colors.coolGray[500],
          }}></View>

          <Text style={{ marginTop: SPACING * 2, color: colors.rose[100], fontSize: SPACING * 2.2, fontFamily: FONTS.blmelodyBold }}>Categories</Text>

          <Categories onChange={(id) => setActiveCategoryId(id)} />

          {/* show news article based on category */}

          <ScrollView horizontal={true}
            contentContainerStyle={{
              width: "100%",
              flexDirection: "column",
              alignItems: "center"
            }}
          >

            <ArticleCards articles={articles} horizontalAlign={false} />

          </ScrollView>



        </ScrollView>
      </SafeAreaView >
    </View >

  );
};

export default HomeScreen;

