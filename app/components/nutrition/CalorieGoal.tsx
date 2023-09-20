import React from "react";
import { View, StyleSheet } from "react-native";
import ProgressBar from "../ProgressBar";
import CircularMacros from "./CircularMacros";

const CalorieGoal: React.FC = () => {
  return (
    <View style={styles.container}>
      <ProgressBar progress={75} />
      <View style={styles.circularContainer}>
        <CircularMacros radius={35} label="PROTEIN" />
        <CircularMacros radius={35} label="FATS" />
        <CircularMacros radius={35} label="CARBS" />
        <CircularMacros radius={35} label="FIBRE" />
      </View>
    </View>
  );
};

export default CalorieGoal;

const styles = StyleSheet.create({
  container: {},
  progressBarText: {
    color: "#fff",
    fontSize: 16,
  },
  progressBarSuffixText: {
    color: "#C2C5C7",
  },
  progressBarTextContainer: {
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  circularContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
