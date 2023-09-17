import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Text from "../components/MyAppText";
import Theme from "../config/Theme";
import Screen from "../components/Screen";
import ProgressGraph from "../components/ProgressGraph";

const ProgressScreen: React.FC = () => {
  return (
    <Screen>
      <ScrollView>
        <ProgressGraph />
      </ScrollView>
    </Screen>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({
  container: {},
  text: {
    color: Theme.colors.white,
    fontSize: 15,
    marginHorizontal: 20,
  },
});
