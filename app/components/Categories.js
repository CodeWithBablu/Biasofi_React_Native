import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import categories from "../config/categories";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { FONTS } from "../config";

const Categories = ({ onChange }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(0);

  const handlePress = (id) => {
    setActiveCategoryId(id);
    onChange(id);
  }

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={categories}
      horizontal={true}
      contentContainerStyle={{
        marginVertical: SPACING * 2,
        marginLeft: SPACING * 3,
      }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={[{
          flexDirection: "row",
          alignItems: "baseline",
          marginRight: SPACING * 3,
          borderRadius: SPACING * 1.2,
          backgroundColor: colors.green[200],
        },
        activeCategoryId !== item.id && { backgroundColor: colors.dark, }
        ]}
          onPress={() => handlePress(item.id)}
        >
          <Text style={[
            { color: colors.green[200], fontSize: SPACING * 1.6, paddingHorizontal: SPACING * 2, paddingVertical: SPACING, fontFamily: FONTS.bold },
            activeCategoryId === item.id && { color: colors.black, fontSize: SPACING * 1.8 }
          ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
