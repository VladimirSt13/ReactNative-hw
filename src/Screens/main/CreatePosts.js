import { Text, View, StyleSheet } from "react-native";

export const CreatePosts = () => {
  return (
    <View style={styles.container}>
      <Text>Create posts screen</Text>
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
