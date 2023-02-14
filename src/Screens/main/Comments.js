import { Text, View, StyleSheet } from "react-native";

export const Comments = () => {
  return (
    <View style={styles.container}>
      <Text>Comments screen</Text>
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
