import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

interface WorkoutItemProps {
  workout: {
    id: number;
    title: string;
    imageUrl: number;
  };
  onButtonPress?: (id: number) => void;
}

const TargetMuscles: React.FC<WorkoutItemProps> = ({ workout }) => {
  return <Image source={workout.imageUrl} style={styles.image} />;
};

export default TargetMuscles;

const styles = StyleSheet.create({
  image: { height: 300, width: 150, resizeMode: "contain" },
});
