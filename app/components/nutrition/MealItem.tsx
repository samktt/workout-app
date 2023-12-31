import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";

import theme from "../../config/Theme";

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
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{meal.title}</Text>
        <Text style={styles.description}>{meal.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: "cover",
    marginRight: 10,
    borderRadius: 10,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    color: theme.colors.white,
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    color: theme.colors.grey2,
  },
});

export default MealItem;
