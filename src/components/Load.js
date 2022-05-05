import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const Load = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#f80032" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
