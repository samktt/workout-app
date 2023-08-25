import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import theme from "../config/theme";

interface WorkoutSet {
  reps: number;
  actualReps: number;
}

interface WorkoutItemProps {
  workout: {
    id: number;
    title: string;
    imageUrl: number;
    sets: WorkoutSet[];
  };
  onButtonPress: (id: number) => void;
}

const WorkoutItem: React.FC<WorkoutItemProps> = ({
  workout,
  onButtonPress,
}) => {
  const [displayedReps, setDisplayedReps] = useState<number[]>(
    workout.sets.map((set) => set.reps)
  );
  const [initialClicks, setInitialClicks] = useState<boolean[]>(
    new Array(workout.sets.length).fill(false)
  );

  const handleButtonClick = (index: number) => {
    if (!initialClicks[index]) {
      const newInitialClicks = [...initialClicks];
      newInitialClicks[index] = true;
      setInitialClicks(newInitialClicks);
    } else if (displayedReps[index] > 0) {
      const newDisplayedReps = [...displayedReps];
      newDisplayedReps[index] -= 1;
      setDisplayedReps(newDisplayedReps);

      if (newDisplayedReps[index] === 0) {
        setInitialClicks([...initialClicks.fill(false)]);
        setDisplayedReps([...workout.sets.map((set) => set.reps)]);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Image source={workout.imageUrl} style={styles.image} />

      <View style={styles.rightContainer}>
        <Text style={styles.title}>{workout.title}</Text>

        <View style={styles.buttonContainer}>
          {workout.sets.map((set, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.roundButton,
                {
                  backgroundColor: initialClicks[index]
                    ? theme.colors.primary
                    : theme.colors.grey0,
                },
              ]}
              onPress={() => handleButtonClick(index)}
            >
              <Text style={styles.buttonText}>{displayedReps[index]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default WorkoutItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  rightContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginRight: 20,
  },
  title: {
    marginVertical: 5,
    color: "#fff",
  },
  button: {
    backgroundColor: "#ccc",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  buttonText: {
    color: "white",
  },
});
