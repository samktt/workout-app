import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Theme from "../../config/Theme";

interface SwitchTabButtonProps {
  onPress: () => void;
}

const SwitchTabButton: React.FC<SwitchTabButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.workoutPlanButton}>
      <Text style={styles.workoutButtonText}>Push Day</Text>
    </TouchableOpacity>
  );
};

export default SwitchTabButton;

const styles = StyleSheet.create({
  workoutPlanButton: {
    backgroundColor: Theme.colors.darkPurp,
    borderRadius: 7,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  workoutButtonText: {
    fontSize: 20,
    color: Theme.colors.grey3,
    marginVertical: 10,
  },
});
