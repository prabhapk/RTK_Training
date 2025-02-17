import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const Splashscreen = ({navigation}:any) => {
  

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("detailsPage");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.splashPicView}>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <Image source={require("../assets/welcome.jpg")} style={styles.splashLogo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
  },
  splashPicView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashLogo: {
    resizeMode: "contain",
    width: "100%",
    height: 250,
  },
});

export default Splashscreen;
