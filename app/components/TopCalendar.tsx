import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./MyAppText";
import Theme from "../config/Theme";

const TopCalendar: React.FC = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="chevron-left" size={34} color="white" />
      <Text fontWeight="bold" style={styles.text}>
        TODAY
      </Text>
      <MaterialCommunityIcons name="chevron-right" size={34} color="white" />
    </View>
  );
};

export default TopCalendar;

const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    flexDirection: "row",
  },
  text: {
    color: Theme.colors.white,
    fontSize: 15,
    marginHorizontal: 20,
  },
});
