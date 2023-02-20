import { Text, View, Image, StyleSheet } from "react-native";
import avatar from "../../img/Home/avatar.jpg";

export const Posts = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexGrow: 1, paddingHorizontal: 16, paddingVertical: 32 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              backgroundColor: "#BDBDBD",
              marginRight: 8,
            }}
          >
            <Image source={avatar} />
          </View>
          <View>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        <View>
          <Text>Тут будуть пости користувача</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  userStyle: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
