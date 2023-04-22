import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors'
import SPACING from '../config/SPACING'

import { Ionicons } from '@expo/vector-icons';
import { FONTS } from '../config';
import { BlurView } from 'expo-blur';


const Setting = ({ navigation }) => {


  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.dark,
    }}>
      <SafeAreaView style={{
        marginTop: StatusBar.currentHeight,
        marginBottom: SPACING * 12,
        backgroundColor: colors.dark,
      }}>

        <View style={{
          backgroundColor: colors.dark,
          alignItems: "center",
          height: "100%",
          padding: SPACING,
        }}>

          <Text style={{
            marginTop: SPACING * 4,
            fontFamily: FONTS.bold,
            fontSize: SPACING * 2.2,
            color: colors.indigo[200]
          }}>Settings</Text>

          <Text style={{
            width: "90%",
            textAlign: "center",
            marginTop: SPACING,
            fontFamily: FONTS.semiBold,
            fontSize: SPACING * 2,
            color: colors.gray[300],
          }}>Hey! Tweak as you wish 😋️</Text>

          <ScrollView style={{
            width: "100%",
            // borderTopLeftRadius: SPACING * 4,
            // borderTopRightRadius: SPACING * 4,
            borderRadius: SPACING * 3,
            marginTop: SPACING * 10,
            backgroundColor: colors.indigo[100],
          }}>

            <TouchableOpacity style={{ marginTop: SPACING * 10, alignItems: "center", }}>

              <View style={styles.viewBoxStyle}>

                <Ionicons
                  style={styles.IonStyle}
                  name='md-locate'
                  size={SPACING * 3}
                  color={colors.white}
                />

                <Text style={styles.textStyle}>Privacy</Text>

                <View>
                  <Ionicons
                    style={styles.arrowIonStyle}
                    name='chevron-forward-sharp'
                    size={SPACING * 4}
                    color={colors.rose}
                  />
                </View>

              </View>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginTop: SPACING * 3, alignItems: "center", }}>

              <View style={styles.viewBoxStyle}>

                <Ionicons
                  style={styles.IonStyle}
                  name='chatbox-ellipses'
                  size={SPACING * 3}
                  color={colors.white}
                />

                <Text style={styles.textStyle}>Contact</Text>

                <View>
                  <Ionicons
                    style={styles.arrowIonStyle}
                    name='chevron-forward-sharp'
                    size={SPACING * 4}
                    color={colors.rose}
                  />
                </View>

              </View>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginTop: SPACING * 3, alignItems: "center", }}>

              <View style={styles.viewBoxStyle}>

                <Ionicons
                  style={styles.IonStyle}
                  name='md-book'
                  size={SPACING * 3}
                  color={colors.white}
                />

                <Text style={styles.textStyle}>Terms of Service</Text>

                <View>
                  <Ionicons
                    style={styles.arrowIonStyle}
                    name='chevron-forward-sharp'
                    size={SPACING * 4}
                    color={colors.rose}
                  />
                </View>

              </View>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginTop: SPACING * 3, alignItems: "center", }}>

              <View style={styles.viewBoxStyle}>

                <Ionicons
                  style={styles.IonStyle}
                  name='md-log-out'
                  size={SPACING * 3}
                  color={colors.white}
                />

                <Text style={styles.textStyle}>Logout</Text>

                <View>
                  <Ionicons
                    style={styles.arrowIonStyle}
                    name='chevron-forward-sharp'
                    size={SPACING * 4}
                    color={colors.rose}
                  />
                </View>

              </View>
            </TouchableOpacity>


          </ScrollView>

        </View>

      </SafeAreaView >
    </View >

  )
}

const styles = StyleSheet.create({
  viewBoxStyle: {
    width: "90%",
    borderRadius: SPACING * 2,
    height: SPACING * 6.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.emerald[100],
  },
  viewIonStyle: {
    alignItems: "center",
    justifyContent: "center"
  },
  IonStyle: {
    textAlignVertical: "center", textAlign: "center", width: SPACING * 6, height: SPACING * 5.5, backgroundColor: colors.violet[400], borderRadius: SPACING * 1.5, marginLeft: SPACING / 2,
  },
  arrowIonStyle: {
    textAlignVertical: "center", textAlign: "center", width: SPACING * 6.5, height: SPACING * 6.5, backgroundColor: colors.orange[100], borderTopRightRadius: SPACING * 2, borderBottomRightRadius: SPACING * 2,
  },
  textStyle: {
    width: SPACING * 20,
    color: colors.dark,
    fontFamily: FONTS.bold,
    fontSize: SPACING * 1.8,
  }
});

export default Setting