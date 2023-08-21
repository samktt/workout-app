import React from "react";
import { StyleSheet, FlatList } from "react-native";
import TargetMuscles from "../components/TargetMuscles";
import Screen from "../components/Screen";
import WorkoutItem from "../components/WorkoutItem";

interface Workout {
  id: number;
  title: string;
  imageUrl: number;
}

const WorkoutsScreen: React.FC = () => {
  const handleButtonPress = (workoutId: number) => {};

  const renderItem = ({ item }: { item: Workout }) => {
    if (item.id === 0) {
      return <TargetMuscles workout={item} onButtonPress={handleButtonPress} />;
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
      />
    </Screen>
  );
};

export default WorkoutsScreen;

const styles = StyleSheet.create({});

const workouts = [
  {
    id: 0,
    title: "Featured Workout",
    imageUrl: require("../../assets/images/targetMuscles/backFull.png"),
  },
  {
    id: 1,
    title: "Workout 1",
    imageUrl: require("../../assets/images/exercises/romanianDeadlift.png"),
  },
  {
    id: 2,
    title: "Workout 1",
    imageUrl: require("../../assets/images/exercises/shrugs.png"),
  },
  {
    id: 3,
    title: "Workout 1",
    imageUrl: require("../../assets/images/exercises/squat.png"),
  },
];
