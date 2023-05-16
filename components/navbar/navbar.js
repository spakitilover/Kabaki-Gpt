import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Navbar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> salam</Text>;
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
});
