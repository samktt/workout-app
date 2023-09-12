import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

import theme from "../config/Theme";

function CircularMacros({
  value = 60,
  radius = 30,
  color = "#1E272D",
  label = "",
}) {
  return (
    <View style={styles.circularContainer}>
      <CircularProgress
        value={value} // Use the value prop directly
        radius={radius}
        inActiveStrokeOpacity={1}
        activeStrokeColor={theme.colors.primary}
        inActiveStrokeColor={color}
        activeStrokeWidth={9}
        inActiveStrokeWidth={9}
        progressValueStyle={{
          fontWeight: "200",
          color: "#fff",
          fontSize: 17,
          marginBottom: 25,
        }}
      />
      <View
        style={{
          position: "absolute",
          justifyContent: "center",
          width: radius * 2,
          height: radius * 2,
        }}
      >
        <Text style={[styles.denominator, { marginTop: 25 }]}>{100}</Text>
      </View>

      <View
        style={{
          position: "absolute",
          justifyContent: "center",
          width: radius * 2,
          height: radius * 2,
        }}
      >
        <View
          style={{
            height: 0.5,
            marginHorizontal: radius / 1.5,
            backgroundColor: "#fff",
          }}
        />
      </View>

      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

export default CircularMacros;

const styles = StyleSheet.create({
  circularContainer: {
    alignSelf: "flex-start",
  },
  label: {
    marginTop: 10,
    alignSelf: "center",
    color: "#fff",
    fontWeight: "200",
    fontSize: 16,
  },
  denominator: {
    color: "#fff",
    fontWeight: "200",
    alignSelf: "center",
    fontSize: 16,
  },
});
