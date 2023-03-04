import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const Map = ({ route }) => {
  const { params, postName } = route;
  console.log(
    "🚀 ~ file: Map.js:7 ~ Map ~ params, postName:",
    params,
    postName
  );
  const { location } = params;
  console.log("🚀 ~ file: Map.js:9 ~ Map ~ location:", location);
  const { lat, long, region, country } = location;
  console.log(
    "🚀 ~ file: Map.js:11 ~ Map ~ lat, long, region, country:",
    lat,
    long,
    region,
    country
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
        onMapReady={() => {}}
        onRegionChange={() => {}}
      >
        <Marker
          title={postName}
          coordinate={{
            latitude: lat,
            longitude: long,
          }}
          description={`${region}, ${country}`}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
