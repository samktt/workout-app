import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import HomeCard from "../components/HomeCard";

const HomeScreen: React.FC = () => {
  return (
    <Screen>
      <HomeCard />
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
});
