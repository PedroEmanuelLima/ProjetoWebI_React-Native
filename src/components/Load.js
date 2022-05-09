import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export const Load = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="blue" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    justifyContent:"center",
    marginTop:"60%",
  }
});
