import React from "react";
import { View, Text, StyleSheet, Button as ButtonRN } from "react-native";

export function Home({ navigation, route }) {
  return (
    <>
      <Text>Home Screen</Text>
      <ButtonRN
        title="Reg"
        onPress={() => navigation.navigate("Registration")}
      />
      <ButtonRN
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
