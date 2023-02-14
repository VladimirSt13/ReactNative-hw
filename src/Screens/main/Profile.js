import { Text, View, StyleSheet } from "react-native";

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
