import { Text, View, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export const Map = () => {
  return (
    <View style={styles.container}>
      <Text>Maps screen</Text>
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
