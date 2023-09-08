import React from "react";
import { StyleSheet, FlatList, View, Image, Text } from "react-native";
import Screen from "../components/Screen";
import theme from "../config/theme";
import MealItem from "../components/MealItem";

interface Meal {
  id: number;
  title: string;
  imageUrl: number;
  description: string;
}

const NutritionScreen: React.FC = () => {
  const handleButtonPress = (mealId: number) => {};
  const renderSeparator = () => <View style={styles.separator} />;

  const renderItem = ({ item }: { item: Meal }) => {
    if (item.id === 0) {
      return <View></View>;
    } else {
      return <MealItem meal={item} onButtonPress={handleButtonPress} />;
    }
  };

  return (
    <Screen>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
      />
    </Screen>
  );
};

export default NutritionScreen;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: theme.colors.grey0,
  },
});

const meals = [
  {
    id: 1,
    title: "Omelette",
    description: "Calories: 250, Protein :30, Fat: 10,  Carbs: 50",
    imageUrl: require("../../assets/images/meals/eggs.jpg"),
  },
  {
    id: 2,
    title: "Pancakes and fruits",
    description: "Calories: 250, Protein :30, Fat: 10,  Carbs: 50",
    imageUrl: require("../../assets/images/meals/pancakes.jpg"),
  },
  {
    id: 3,
    title: "Shrimp and rice",
    description: "Calories: 250, Protein :30, Fat: 10,  Carbs: 50",
    imageUrl: require("../../assets/images/meals/shrimp.jpg"),
  },
  {
    id: 4,
    title: "Burrito",
    description: "Calories: 250, Protein :30, Fat: 10,  Carbs: 50",
    imageUrl: require("../../assets/images/meals/burrito.jpg"),
  },
  {
    id: 5,
    title: "Noodles with mushrooms",
    description: "Calories: 250, Protein :30, Fat: 10,  Carbs: 50",
    imageUrl: require("../../assets/images/meals/noodles.jpg"),
  },
];
