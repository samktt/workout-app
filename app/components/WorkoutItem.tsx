import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface WorkoutItemProps {
  workout: {
    id: number;
    title: string;
    imageUrl: number;
  };
  onButtonPress: (id: number) => void;
}

const WorkoutItem: React.FC<WorkoutItemProps> = ({
  workout,
  onButtonPress,
}) => {
  return (
    <View style={styles.container}>
      <Image source={workout.imageUrl} style={styles.image} />
      <Text style={styles.title}>{workout.title}</Text>
      <TouchableOpacity
        onPress={() => onButtonPress(workout.id)}
        style={styles.button}
      >
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  title: {
    marginTop: 5,
    color: "#fff",
  },
  button: {
    backgroundColor: "#ccc",
  },
});
