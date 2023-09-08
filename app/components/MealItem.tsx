import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";

import theme from "../config/theme";

interface MealItemProps {
  meal: {
    id: number;
    title: string;
    imageUrl: number;
    description: string;
  };
  onButtonPress: (id: number) => void;
}

const MealItem: React.FC<MealItemProps> = ({ meal, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <Image source={meal.imageUrl} style={styles.image} />
      {/* <View style={styles.rightContainer}>
                <Text style={styles.title}>{meal.title}</Text>
                <Text style={styles.description}>{meal.description}</Text>
            </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: theme.colors.white,
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: "contain",
    marginRight: 10,
  },
});

export default MealItem;
