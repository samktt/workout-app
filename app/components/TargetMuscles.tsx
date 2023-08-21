//Component to display the target muscles (front and back) for a day's workout

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TargetMuscles = () => {
  return (
    <View style={styles.container}>
      <Text>Target Muscles</Text>
    </View>
  );
};

export default TargetMuscles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
