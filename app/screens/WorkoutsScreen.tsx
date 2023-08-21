import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TargetMuscles from "../components/TargetMuscles";
import Screen from "../components/Screen";

const WorkoutsScreen = () => {
  return (
    <Screen>
      <ScrollView>
        <TargetMuscles />
      </ScrollView>
    </Screen>
  );
};

export default WorkoutsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
