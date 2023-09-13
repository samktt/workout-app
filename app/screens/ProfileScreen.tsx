import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//@ts-ignore
const ProfileScreen: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Close" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
