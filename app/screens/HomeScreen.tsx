import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import Text from "../components/MyAppText";
import Screen from "../components/Screen";
import HomeCard from "../components/HomeCard";
import Theme from "../config/Theme";
import CalorieGoal from "../components/CalorieGoal";
import SwitchTabButton from "../components/SwitchTabButton";

// @ts-ignore
const HomeScreen: React.FC = ({ navigation }) => {
  return (
    <Screen>
      <ScrollView style={styles.scrollView}>
        <HomeCard />

        <Text fontWeight="bold" style={styles.sectionText}>
          WORKOUT PLAN
        </Text>
        <SwitchTabButton onPress={() => navigation.navigate("Workouts")} />

        <Text fontWeight="bold" style={styles.sectionText}>
          NUTRITION
        </Text>

        <CalorieGoal />
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  sectionText: {
    fontSize: 15,
    color: Theme.colors.grey2,
    marginTop: 30,
    marginBottom: 10,
  },
});
