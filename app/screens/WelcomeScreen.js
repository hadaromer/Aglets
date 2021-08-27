import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.tagline}>Whatever.</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"login"} />
        <AppButton title={"register"} color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: "100%",
    height: 100,
  },
  logoContainer: {
    width: "100%",
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    // paddingVertical: 20,
  },
});

export default WelcomeScreen;
