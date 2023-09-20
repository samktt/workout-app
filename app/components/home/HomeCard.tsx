import React from "react";
import { StyleSheet, View, Image } from "react-native";
import theme from "../../config/Theme";
import Text from "../MyAppText";

const HomeCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/icon/iconSmall.png")}
        style={styles.image}
      />
      <Text style={styles.quote}>
        If it doesn't challenge you, it doesn't change you.
      </Text>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 20,
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: "cover",
    margin: 10,
  },
  quote: {
    fontSize: 18,
    color: theme.colors.grey1,
    textAlign: "center",
  },
});
