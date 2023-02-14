import { Text, View, Image, StyleSheet } from "react-native";
import avatar from "../../img/Home/avatar.jpg";
import Grid from "../../img/Home/grid.svg";
import Plus from "../../img/Home/plus.svg";
import User from "../../img/Home/user.svg";

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
      <View style={styles.footer}>
        <Grid width={40} height={40} fill="#000" />
        <Plus width={13} height={13} fill="#000" />
        <User width={40} height={40} stroke="#000" />
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
  footer: {
    height: 83,
    flexDirection: "row",
    alignItems: "center",
  },
});
