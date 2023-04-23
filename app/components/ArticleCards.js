import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';


import categories from "../config/categories";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { FONTS } from "../config";
import { BlurView } from "expo-blur";

const logo = require("../../assets/logo.png");

const ArticleCards = ({ articles, horizontalAlign }) => {

  const navigation = useNavigation();

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={articles}
      horizontal={horizontalAlign}
      contentContainerStyle={[{
        marginVertical: SPACING * 2,
        marginLeft: SPACING * 4,
      },
      horizontalAlign === false && { marginLeft: SPACING * 0 }
      ]}
      keyExtractor={(item) => item.title.concat(item.publishedAt)}
      renderItem={({ item }) => (
        <TouchableOpacity style={[{
          marginRight: SPACING * 4,
          borderRadius: SPACING * 2,
        },
        horizontalAlign === false && { marginRight: SPACING * 0, marginVertical: SPACING }
        ]}
          onPress={() => navigation.navigate('WebViewScreen', {
            id: 1,
            URL: item.url,
          })}
        >

          <View style={{
            flexDirection: "column",
            width: SPACING * 38,
            padding: SPACING,
            borderRadius: SPACING * 2,
            backgroundColor: colors.gray[800]
          }}
          >

            {
              item.urlToImage ?
                <>
                  <Image
                    style={{ width: "100%", height: SPACING * 25, borderRadius: SPACING * 2, }}
                    source={{ uri: item.urlToImage }}
                  />
                </> :
                <>
                  <Image
                    style={{ width: "100%", height: SPACING * 25, borderRadius: SPACING * 2, }}
                    source={logo}
                  />
                </>
            }

            <View style={{
              flex: 1,
              flexDirection: "column",
              padding: SPACING,
            }}>

              <Text style={{ width: "100%", color: colors.gray[50], fontSize: SPACING * 1.8, fontFamily: FONTS.semiBold }}>
                {item.title == null ? "Random news" : (item.title).slice(0, 80)}
              </Text>

              <View style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}>

                <Text style={{
                  color: colors.black,
                  fontSize: SPACING * 1.6,
                  padding: SPACING,
                  borderRadius: SPACING,
                  fontFamily: FONTS.dynapuffMedium,
                  backgroundColor: colors.violet[200],
                }}>
                  /: {' '}{item.author == null ? "annonymous" : (item.author).slice(0, 22)}
                </Text>

                <Text style={{ color: colors.gray[400], fontSize: SPACING * 1.6, fontFamily: FONTS.dynapuffMedium }}>
                  {item.publishedAt == null ? "--/--/----" : new Date(item.publishedAt).toLocaleDateString()}
                </Text>

              </View>


            </View>
          </View>

        </TouchableOpacity>
      )}
    />
  );
};

export default ArticleCards;

