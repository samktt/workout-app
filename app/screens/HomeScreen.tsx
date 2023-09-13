import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import Text from "../components/MyAppText";
import Screen from "../components/Screen";
import HomeCard from "../components/HomeCard";
import Theme from "../config/Theme";
import CalorieGoal from "../components/CalorieGoal";
import SwitchTabButton from "../components/SwitchTabButton";

// @ts-ignore
import UilUserCircle from "@iconscout/react-native-unicons/icons/uil-user-circle";

// @ts-ignore
const HomeScreen: React.FC = ({ navigation }) => {
  return (
    <Screen>
      <ScrollView style={styles.scrollView}>
        <View style={styles.topBarContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/icon/textLogo.png")}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <UilUserCircle color={Theme.colors.grey2} size={30} />
          </TouchableOpacity>
        </View>

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
  image: {
    width: 150,
    height: 25,
    resizeMode: "contain",
  },
  topBarContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
});
