import React from "react";
import { StyleSheet, FlatList, View, Image, Text } from "react-native";
import Screen from "../components/Screen";
import WorkoutItem from "../components/WorkoutItem";
import theme from "../config/theme";

interface WorkoutSet {
  reps: number;
  actualReps: number;
}

interface Workout {
  id: number;
  title: string;
  imageUrl: number;
  frontImageUrl?: number;
  sets: WorkoutSet[];
}

const WorkoutsScreen: React.FC = () => {
  const handleButtonPress = (workoutId: number) => {};
  const renderSeparator = () => <View style={styles.separator} />;

  const renderItem = ({ item }: { item: Workout }) => {
    if (item.id === 0) {
      return (
        <View style={styles.targetMuscleImageContainer}>
          <Image source={item.imageUrl} style={styles.image} />
          <Image
            source={item.frontImageUrl ?? item.imageUrl}
            style={styles.image}
          />
        </View>
      );
    } else {
      return <WorkoutItem workout={item} onButtonPress={handleButtonPress} />;
    }
  };

  return (
    <Screen>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
      />
    </Screen>
  );
};

export default WorkoutsScreen;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: theme.colors.grey0,
  },
  image: { height: 300, width: 150, resizeMode: "contain" },
  targetMuscleImageContainer: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
});

const workouts = [
  {
    id: 0,
    title: "Target Muscles",
    imageUrl: require("../../assets/images/targetMuscles/backFull.png"),
    frontImageUrl: require("../../assets/images/targetMuscles/frontFull.png"),
    sets: [],
  },
  {
    id: 1,
    title: "Deadlift",
    imageUrl: require("../../assets/images/exercises/romanianDeadlift.png"),
    sets: [
      { reps: 8, actualReps: 0 },
      { reps: 8, actualReps: 0 },
      { reps: 6, actualReps: 0 },
    ],
  },
  {
    id: 2,
    title: "Shrugs",
    imageUrl: require("../../assets/images/exercises/shrugs.png"),
    sets: [
      { reps: 5, actualReps: 0 },
      { reps: 5, actualReps: 0 },
      { reps: 5, actualReps: 0 },
      { reps: 5, actualReps: 0 },
    ],
  },
  {
    id: 3,
    title: "Suqats",
    imageUrl: require("../../assets/images/exercises/squat.png"),
    sets: [
      { reps: 8, actualReps: 0 },
      { reps: 8, actualReps: 0 },
      { reps: 8, actualReps: 0 },
      { reps: 6, actualReps: 0 },
    ],
  },
];
