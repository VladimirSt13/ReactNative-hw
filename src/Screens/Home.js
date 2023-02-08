import React from "react";
import { View, Text, StyleSheet, Button as ButtonRN } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <ButtonRN
        title="Reg"
        onPress={() => navigation.navigate("Registration")}
      />
      <ButtonRN
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
