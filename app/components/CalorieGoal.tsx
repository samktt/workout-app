import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
} from "react-native";
import ProgressBar from "./ProgressBar";
import CircularMacros from "./CircularMacros";

const CalorieGoal: React.FC = () => {
  const progressBarWidth = Dimensions.get("window").width - 60;

  return (
    <View style={styles.container}>
      <ProgressBar progress={7} />
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
    fontSize: 17,
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
    paddingHorizontal: 30,
    marginBottom: 30,
  },
});
