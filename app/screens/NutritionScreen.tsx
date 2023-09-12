import React from "react";
import { StyleSheet, FlatList, View, Image, Text } from "react-native";
import Screen from "../components/Screen";
import theme from "../config/Theme";
import MealItem from "../components/MealItem";
import CalorieGoal from "../components/CalorieGoal";

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
      return <CalorieGoal />;
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
    id: 0,
    title: "Omelette",
    description: "Cal: 250, Pro :30, Fat: 10,  Crbs: 50",
    imageUrl: require("../../assets/images/meals/eggs.jpg"),
  },
  {
    id: 1,
    title: "Omelette",
    description: "Cal: 250, Pro :30, Fat: 10,  Crbs: 50",
    imageUrl: require("../../assets/images/meals/eggs.jpg"),
  },
  {
    id: 2,
    title: "Pancakes and fruits",
    description: "Cal: 250, Pro :30, Fat: 10,  Crbs: 50",
    imageUrl: require("../../assets/images/meals/pancakes.jpg"),
  },
  {
    id: 3,
    title: "Shrimp and rice",
    description: "Cal: 250, Pro :30, Fat: 10,  Crbs: 50",
    imageUrl: require("../../assets/images/meals/shrimp.jpg"),
  },
  {
    id: 4,
    title: "Burrito",
    description: "Cal: 250, Pro :30, Fat: 10,  Crbs: 50",
    imageUrl: require("../../assets/images/meals/burrito.jpg"),
  },
  {
    id: 5,
    title: "Noodles with mushrooms",
    description: "Cal: 250, Pro :30, Fat: 10,  Crbs: 50",
    imageUrl: require("../../assets/images/meals/noodles.jpg"),
  },
];
